import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IHttpRequestOptions,
} from 'n8n-workflow';
import { NodeConnectionTypes, NodeOperationError, ApplicationError } from 'n8n-workflow';
import { assistanceManagementDescription } from './resources/Assistance Management';
import { administrationManagementDescription } from './resources/Administration Management';
import { AssetManagementDescription } from './resources/Asset Management';
import { managementDescription } from './resources/Management';
import { toolManagementDescription } from './resources/Tool Management';
import { setupManagementDescription } from './resources/Setup Management';

// 🔐 Função utilitária para inicializar sessão GLPI
// IMPORTANTE: initSession só aceita GET e retorna session-token
// O session-token deve ser usado no header 'Session-Token' de todas as requisições posteriores
async function initSession(
	this: IExecuteFunctions,
	baseUrl: string,
	appToken: string,
	username: string,
	password: string,
): Promise<string> {
	try {
		// baseUrl já inclui /apirest.php, então apenas adiciona /initSession
		const response = await this.helpers.httpRequest({
			method: 'GET', // initSession só aceita GET
			url: `${baseUrl}/initSession`,
			headers: {
				'App-Token': appToken,
			},
			auth: {
				username,
				password,
			},
			json: true,
		});

		if (!response?.session_token) {
			throw new ApplicationError('Failed to init GLPI session: session_token not found in response', {
				level: 'warning',
			});
		}

		return response.session_token;
	} catch (error) {
		if (error && typeof error === 'object' && 'response' in error) {
			const httpError = error as { response: { status: number; statusText: string } };
			throw new ApplicationError(
				`Failed to init GLPI session: ${httpError.response.status} ${httpError.response.statusText}. Check your credentials and URL.`,
				{ level: 'error' },
			);
		}
		const errorMessage = error instanceof Error ? error.message : String(error);
		throw new ApplicationError(`Failed to init GLPI session: ${errorMessage}`, { level: 'error' });
	}
}

export class GlpiApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'GLPI Rest API',
		name: 'glpiApi',
		icon: 'file:glpi.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'GLPI Rest API Node compatible with GLPI 9.x and above.',
		defaults: {
			name: 'GLPI Rest API',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		usableAsTool: true,
		credentials: [{ name: 'glpiApi', required: true }],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Administration Management',
						value: 'Administration Management',
					},
					{
						name: 'Asset Management',
						value: 'Asset Management',
					},
					{
						name: 'Assistance Management',
						value: 'Assistance Management',
					},
					{
						name: 'Management',
						value: 'Management',
					},
					{
						name: 'Setup Management',
						value: 'Setup Management',
					},
					{
						name: 'Tool Management',
						value: 'Tool Management',
					},
				],
				default: 'Assistance Management',
			},
			...assistanceManagementDescription,
			...administrationManagementDescription,
			...AssetManagementDescription,
			...managementDescription,
			...toolManagementDescription,
			...setupManagementDescription,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		const creds = await this.getCredentials('glpiApi');
		// Adiciona /apirest.php automaticamente se não estiver presente
		let baseUrl = (creds.host as string).trim();
		if (!baseUrl.endsWith('/apirest.php')) {
			baseUrl = baseUrl.replace(/\/+$/, '') + '/apirest.php';
		}

		// 🔐 Auto init session (uma vez por execução)
		// O session-token retornado será usado no header de todas as requisições
		const sessionToken = await initSession.call(
			this,
			baseUrl,
			creds.appToken as string,
			creds.username as string,
			creds.password as string,
		);

		// Headers com Session-Token para todas as requisições posteriores
		const headers = {
			'App-Token': creds.appToken as string,
			'Session-Token': sessionToken, // Session-token obtido do initSession
			'Content-Type': 'application/json',
		};

		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			try {
				const resource = this.getNodeParameter('resource', itemIndex) as string;
				const operation = this.getNodeParameter('operation', itemIndex) as string;

				// Determina o itemtype baseado no resource e operation
				let itemtype: string;
				if (resource === 'Administration Management') {
					if (operation === 'getGroup' || operation === 'createGroup' || operation === 'updateGroup') {
						itemtype = 'Group';
					} else if (operation === 'getProfile' || operation === 'createProfile' || operation === 'updateProfile') {
						itemtype = 'Profile';
					} else {
						itemtype = 'User';
					}
				} else if (resource === 'Asset Management' || resource === 'Management' || resource === 'Tool Management' || resource === 'Setup Management') {
					itemtype = (this.getNodeParameter('itemtype', itemIndex) as string) || '';
				} else {
					// Assistance Management
					itemtype = (this.getNodeParameter('itemtype', itemIndex) as string) || '';
				}

				let options: IHttpRequestOptions;

				// Normaliza a operation para get/create/update
				let normalizedOperation = operation;
				if (operation === 'getGroup' || operation === 'getProfile') {
					normalizedOperation = 'get';
				} else if (operation === 'createGroup' || operation === 'createProfile') {
					normalizedOperation = 'create';
				} else if (operation === 'updateGroup' || operation === 'updateProfile') {
					normalizedOperation = 'update';
				}

				if (normalizedOperation === 'get') {
					const id = this.getNodeParameter('itemId', itemIndex, '') as string;
					options = {
						method: 'GET',
						url: `${baseUrl}/${itemtype}${id ? '/' + id : ''}`,
						headers,
						json: true,
					};
				} else if (normalizedOperation === 'create') {
					const payload = this.getNodeParameter('payload', itemIndex);
					options = {
						method: 'POST',
						url: `${baseUrl}/${itemtype}`,
						headers,
						body: { input: typeof payload === 'string' ? JSON.parse(payload) : payload },
						json: true,
					};
				} else if (normalizedOperation === 'update') {
					const id = this.getNodeParameter('itemId', itemIndex);
					const payload = this.getNodeParameter('payload', itemIndex);
					options = {
						method: 'PUT',
						url: `${baseUrl}/${itemtype}/${id}`,
						headers,
						body: { input: typeof payload === 'string' ? JSON.parse(payload) : payload },
						json: true,
					};
				} else if (operation === 'comment') {
					options = {
						method: 'POST',
						url: `${baseUrl}/ITILFollowup`,
						headers,
						body: {
							input: {
								items_id: this.getNodeParameter('itemId', itemIndex),
								itemtype,
								content: this.getNodeParameter('comment', itemIndex),
								is_private: this.getNodeParameter('isPrivate', itemIndex) ? 1 : 0,
							},
						},
						json: true,
					};
				} else {
					throw new ApplicationError(`Unknown operation: ${operation}`, { level: 'warning' });
				}

				const response = await this.helpers.httpRequest(options);
				returnData.push({
					json: response,
					pairedItem: { item: itemIndex },
				});
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: error instanceof Error ? error.message : String(error) },
						pairedItem: { item: itemIndex },
					});
				} else {
					throw new NodeOperationError(this.getNode(), error, {
						itemIndex,
					});
				}
			}
		}

		return [returnData];
	}
}

