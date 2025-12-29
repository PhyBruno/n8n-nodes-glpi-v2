import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOtherActions = {
	operation: ['customApiCall'],
	resource: ['Other Actions'],
};

export const otherActionsCustomApiCallDescription: INodeProperties[] = [
	{
		displayName: 'HTTP Method',
		name: 'method',
		type: 'options',
		displayOptions: {
			show: showOnlyForOtherActions,
		},
		options: [
			{ name: 'DELETE', value: 'DELETE' },
			{ name: 'GET', value: 'GET' },
			{ name: 'PATCH', value: 'PATCH' },
			{ name: 'POST', value: 'POST' },
			{ name: 'PUT', value: 'PUT' },
		],
		default: 'GET',
		required: true,
		description: 'HTTP method to use for the request',
	},
	{
		displayName: 'Endpoint',
		name: 'endpoint',
		type: 'string',
		displayOptions: {
			show: showOnlyForOtherActions,
		},
		default: '',
		placeholder: '/User/123',
		required: true,
		description: 'API endpoint path (e.g., /User/123 or /Group)',
	},
	{
		displayName: 'Request Body',
		name: 'body',
		type: 'json',
		displayOptions: {
			show: showOnlyForOtherActions,
		},
		default: '{}',
		description: 'JSON body for POST, PUT, or PATCH requests',
	},
	{
		displayName: 'Additional Headers',
		name: 'headers',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: showOnlyForOtherActions,
		},
		default: {},
		placeholder: 'Add Header',
		options: [
			{
				name: 'header',
				displayName: 'Header',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'Header name',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Header value',
					},
				],
			},
		],
		description: 'Optional additional headers to send with the request',
	},
];
