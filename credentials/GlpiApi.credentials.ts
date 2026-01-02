import type { ICredentialType, ICredentialTestRequest, INodeProperties, Icon } from 'n8n-workflow';

export class GlpiApi implements ICredentialType {
	name = 'glpiApi';

	displayName = 'GLPI V2 API';

	icon: Icon = { light: 'file:../icons/glpi.svg', dark: 'file:../icons/glpi.dark.svg' };

	documentationUrl = 'https://atendimento.centrium.com.br/api.php/v2.1/doc.JSON';

	test: ICredentialTestRequest = {
		request: {
			url: '={{$credentials.host.replace(/\\/+$/, "") + "/api.php"}}/token',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: '={ "grant_type": "password", "client_id": "{{$credentials.clientId}}", "client_secret": "{{$credentials.clientSecret}}", "username": "{{$credentials.username}}", "password": "{{$credentials.password}}" }',
		},
	};

	properties: INodeProperties[] = [
		{
			displayName: 'GLPI URL',
			name: 'host',
			type: 'string',
			default: '',
			placeholder: 'https://glpi.example.com',
			required: true,
			description: 'URL base do GLPI (sem /api.php/v.21 - será adicionado automaticamente)',
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			required: true,
			default: '',
			description: 'Client ID gerado no GLPI (Setup > OAuth Clients)',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description: 'Client Secret gerado no GLPI',
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			required: true,
			default: '',
			description: 'Usuário do GLPI a ser autenticado',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description: 'Senha do usuário do GLPI',
		},
	];
}

