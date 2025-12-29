import type { ICredentialType, ICredentialTestRequest, INodeProperties, Icon } from 'n8n-workflow';

export class GlpiApi implements ICredentialType {
	name = 'glpiApi';

	displayName = 'GLPI API';

	icon: Icon = { light: 'file:../icons/glpi.svg', dark: 'file:../icons/glpi.dark.svg' };

	documentationUrl = 'https://atendimento.centrium.com.br/apirest.php';

	test: ICredentialTestRequest = {
		request: {
			url: '={{$credentials.host.replace(/\\/+$/, "") + "/apirest.php"}}/initSession',
			method: 'GET',
			headers: {
				'App-Token': '={{$credentials.appToken}}',
			},
			auth: {
				username: '={{$credentials.username}}',
				password: '={{$credentials.password}}',
			},
		},
	};

	properties: INodeProperties[] = [
		{
			displayName: 'GLPI URL',
			name: 'host',
			type: 'string',
			default: '',
			placeholder: 'https://glpi.exemplo.com',
			required: true,
			description: 'URL base do GLPI (sem /apirest.php - será adicionado automaticamente)',
		},
		{
			displayName: 'App Token',
			name: 'appToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description: 'App-Token gerado no GLPI',
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			required: true,
			default: '',
			description: 'Nome de usuário do GLPI (Administrador)',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description: 'Senha do usuário do GLPI (Administrador)',
		},
	];
}

