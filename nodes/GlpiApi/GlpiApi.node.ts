import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IHttpRequestMethods,
	IHttpRequestOptions,
	IDataObject,
} from 'n8n-workflow';
import { NodeConnectionTypes, NodeOperationError, ApplicationError } from 'n8n-workflow';
import { assistanceManagementDescription } from './resources/Assistance Management';
import { administrationManagementDescription } from './resources/Administration Management';
import { AssetManagementDescription } from './resources/Asset Management';
import { managementDescription } from './resources/Management';
import { otherActionsDescription } from './resources/Other Actions';
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
		// eslint-disable-next-line @n8n/community-nodes/no-credential-reuse
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
						name: 'Other Action',
						value: 'Other Actions',
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
			...otherActionsDescription,
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
					if (operation === 'getGroup' || operation === 'createGroup' || operation === 'updateGroup' || operation === 'deleteGroup') {
						itemtype = 'Group';
					} else if (operation === 'getProfile' || operation === 'createProfile' || operation === 'updateProfile' || operation === 'deleteProfile') {
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
					const input: IDataObject = {};
					if (resource === 'Assistance Management') {
						input.name = this.getNodeParameter('title', itemIndex) as string;
						input.content = this.getNodeParameter('description', itemIndex) as string;
						input.status = this.getNodeParameter('status_ticket', itemIndex, 0) as number ||
									   this.getNodeParameter('status_problem', itemIndex, 0) as number ||
									   this.getNodeParameter('status_change', itemIndex, 0) as number;
						
						// Remove opening_date logic as requested
						// const date = this.getNodeParameter('opening_date', itemIndex, '') as string;
						// if (date) input.date = date;

						const options = this.getNodeParameter('options', itemIndex, {}) as IDataObject;
						if (options.itilcategories_id) input.itilcategories_id = options.itilcategories_id;
						if (options.users_id_observer) input._users_id_observer = options.users_id_observer;

						const requester = this.getNodeParameter('users_id_requester', itemIndex, '') as string;
						if (requester) input._users_id_requester = requester;

						const assign = this.getNodeParameter('users_id_assign', itemIndex, 0) as number;
						if (assign) input._users_id_assign = assign;
						if (assign) input._users_id_assign = assign;
					} else if (resource === 'Administration Management' && itemtype === 'User') {
						input.name = this.getNodeParameter('name', itemIndex) as string;
						
						const firstname = this.getNodeParameter('firstname', itemIndex, '') as string;
						if (firstname) input.firstname = firstname;

						input.is_active = this.getNodeParameter('is_active', itemIndex, true) ? 1 : 0;
						input.entities_id = this.getNodeParameter('entities_id', itemIndex, 0) as number;

						const emailPassword = this.getNodeParameter('email_password', itemIndex, true) as boolean;
						if (!emailPassword) {
							input.password = this.getNodeParameter('password', itemIndex, '') as string;
						}

						// Handle email - usually mapped to _useremails array or separate Call
						// But for simple User creation, some GLPI versions accept _useremails in payload
						const email = this.getNodeParameter('email', itemIndex, '') as string;
						if (email) input._useremails = [email];

						const options = this.getNodeParameter('options', itemIndex, {}) as IDataObject;
						if (options.is_recursive !== undefined) input.is_recursive = options.is_recursive ? 1 : 0;
						if (options.profiles_id) input.profiles_id = options.profiles_id;
						if (options.phone) input.phone = options.phone;
						if (options.mobile) input.mobile = options.mobile;
						if (options.realname) input.realname = options.realname;
						if (options.mobile) input.mobile = options.mobile;
						if (options.realname) input.realname = options.realname;
					} else if (resource === 'Administration Management' && itemtype === 'Group') {
						input.name = this.getNodeParameter('name', itemIndex) as string;
						input.is_requester = this.getNodeParameter('is_requester', itemIndex, true) ? 1 : 0;
						input.is_watcher = this.getNodeParameter('is_watcher', itemIndex, true) ? 1 : 0;
						input.is_notify = this.getNodeParameter('is_notify', itemIndex, true) ? 1 : 0;
						input.is_usergroup = this.getNodeParameter('is_usergroup', itemIndex, true) ? 1 : 0;
						
						const options = this.getNodeParameter('options', itemIndex, {}) as IDataObject;
						if (options.code) input.code = options.code;
						if (options.recursive_membership !== undefined) input.recursive_membership = options.recursive_membership ? 1 : 0;
						if (options.groups_id) input.groups_id = options.groups_id;
						if (options.comment) input.comment = options.comment;
						if (options.is_manager !== undefined) input.is_manager = options.is_manager ? 1 : 0;
						if (options.is_assign !== undefined) input.is_assign = options.is_assign ? 1 : 0;
						if (options.is_task !== undefined) input.is_task = options.is_task ? 1 : 0;
					}

					options = {
						method: 'POST',
						url: `${baseUrl}/${itemtype}`,
						headers,
						body: { input },
						json: true,
					};
				} else if (normalizedOperation === 'update') {
					const id = this.getNodeParameter('itemId', itemIndex);
					const input: IDataObject = {};
					
					if (resource === 'Assistance Management') {
						const title = this.getNodeParameter('title', itemIndex, '') as string;
						if (title) input.name = title;

						const description = this.getNodeParameter('description', itemIndex, '') as string;
						if (description) input.content = description;

						if (description) input.content = description;

						const status = this.getNodeParameter('status_ticket', itemIndex, 0) as number ||
									   this.getNodeParameter('status_problem', itemIndex, 0) as number ||
									   this.getNodeParameter('status_change', itemIndex, 0) as number;
						if (status) input.status = status;

						// Remove opening_date logic
						// const date = this.getNodeParameter('opening_date', itemIndex, '') as string;
						// if (date) input.date = date;

						const options = this.getNodeParameter('options', itemIndex, {}) as IDataObject;
						if (options.itilcategories_id) input.itilcategories_id = options.itilcategories_id;
						if (options.users_id_observer) input._users_id_observer = options.users_id_observer;

						const requester = this.getNodeParameter('users_id_requester', itemIndex, '') as string;
						if (requester) input._users_id_requester = requester;

						const assign = this.getNodeParameter('users_id_assign', itemIndex, 0) as number;
						if (assign) input._users_id_assign = assign;
					} else if (resource === 'Administration Management') {
						if (itemtype === 'User') {
							const name = this.getNodeParameter('name', itemIndex, '') as string;
							if (name) input.name = name;

							const firstname = this.getNodeParameter('firstname', itemIndex, '') as string;
							if (firstname) input.firstname = firstname;

							const email = this.getNodeParameter('email', itemIndex, '') as string;
							if (email) input._useremails = [email];
							
							const isActive = this.getNodeParameter('is_active', itemIndex, undefined) as boolean | undefined;
							if (isActive !== undefined) input.is_active = isActive ? 1 : 0;

							const entitiesId = this.getNodeParameter('entities_id', itemIndex, 0) as number;
							if (entitiesId) input.entities_id = entitiesId;

							const emailPassword = this.getNodeParameter('email_password', itemIndex, true) as boolean;
							if (!emailPassword) {
								const password = this.getNodeParameter('password', itemIndex, '') as string;
								if (password) input.password = password;
							}
							
							const options = this.getNodeParameter('options', itemIndex, {}) as IDataObject;
							if (options.is_recursive !== undefined) input.is_recursive = options.is_recursive ? 1 : 0;
							if (options.profiles_id) input.profiles_id = options.profiles_id;
							if (options.phone) input.phone = options.phone;
							if (options.mobile) input.mobile = options.mobile;
							if (options.realname) input.realname = options.realname;
						} else if (itemtype === 'Group') {
							const name = this.getNodeParameter('name', itemIndex, '') as string;
							if (name) input.name = name;
							
							const isRequester = this.getNodeParameter('is_requester', itemIndex, undefined) as boolean | undefined;
							if (isRequester !== undefined) input.is_requester = isRequester ? 1 : 0;

							const isWatcher = this.getNodeParameter('is_watcher', itemIndex, undefined) as boolean | undefined;
							if (isWatcher !== undefined) input.is_watcher = isWatcher ? 1 : 0;
							
							const isNotify = this.getNodeParameter('is_notify', itemIndex, undefined) as boolean | undefined;
							if (isNotify !== undefined) input.is_notify = isNotify ? 1 : 0;
							
							const isUsergroup = this.getNodeParameter('is_usergroup', itemIndex, undefined) as boolean | undefined;
							if (isUsergroup !== undefined) input.is_usergroup = isUsergroup ? 1 : 0;

							const options = this.getNodeParameter('options', itemIndex, {}) as IDataObject;
							if (options.code) input.code = options.code;
							if (options.recursive_membership !== undefined) input.recursive_membership = options.recursive_membership ? 1 : 0;
							if (options.groups_id) input.groups_id = options.groups_id;
							if (options.comment) input.comment = options.comment;
							if (options.is_manager !== undefined) input.is_manager = options.is_manager ? 1 : 0;
							if (options.is_assign !== undefined) input.is_assign = options.is_assign ? 1 : 0;
							if (options.is_task !== undefined) input.is_task = options.is_task ? 1 : 0;
						}
					}

					options = {
						method: 'PUT',
						url: `${baseUrl}/${itemtype}/${id}`,
						headers,
						body: { input },
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
				} else if (operation === 'delete') {
					const id = this.getNodeParameter('itemId', itemIndex);
					options = {
						method: 'DELETE',
						url: `${baseUrl}/${itemtype}/${id}`,
						headers,
						json: true,
					};
				} else if (operation === 'deleteGroup' || operation === 'deleteProfile' || operation === 'deleteUser') {
					const id = this.getNodeParameter('itemId', itemIndex);
					// Itemtype is already determined for these operations in the initial block
					options = {
						method: 'DELETE',
						url: `${baseUrl}/${itemtype}/${id}`,
						headers,
						json: true,
					};
				} else if (operation === 'solve') {
					options = {
						method: 'POST',
						url: `${baseUrl}/ITILSolution`,
						headers,
						body: {
							input: {
								items_id: this.getNodeParameter('itemId', itemIndex),
								itemtype,
								content: this.getNodeParameter('content', itemIndex),
								users_id: this.getNodeParameter('users_id', itemIndex),
							},
						},
						json: true,
					};
				} else if (operation === 'customApiCall') {
					const method = this.getNodeParameter('method', itemIndex) as string;
					const endpoint = this.getNodeParameter('endpoint', itemIndex) as string;
					const rawBody = this.getNodeParameter('body', itemIndex, '{}') as string;
					
					// Handle optional custom headers
					const additionalHeaders = this.getNodeParameter('headers', itemIndex) as {
						header?: Array<{ name: string; value: string }>;
					};
					
					// Merge default headers with custom headers
					const customHeaders: { [key: string]: string } = {};
					if (additionalHeaders.header) {
						additionalHeaders.header.forEach((header) => {
							customHeaders[header.name] = header.value;
						});
					}

					options = {
						method: method as IHttpRequestMethods,
						url: `${baseUrl}${endpoint}`,
						headers: {
							...headers,
							...customHeaders,
						},
						json: true,
					};

					if (method !== 'GET' && method !== 'DELETE') {
						try {
							options.body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
						} catch {
							options.body = rawBody;
						}
					}
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

