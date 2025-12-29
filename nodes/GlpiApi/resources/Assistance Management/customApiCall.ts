import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssistanceManagementCustomApiCall = {
	operation: ['customApiCall'],
	resource: ['Assistance Management'],
};

export const assistanceManagementCustomApiCallDescription: INodeProperties[] = [
	{
		displayName: 'HTTP Method',
		name: 'method',
		type: 'options',
		displayOptions: {
			show: showOnlyForAssistanceManagementCustomApiCall,
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
			show: showOnlyForAssistanceManagementCustomApiCall,
		},
		default: '',
		placeholder: '/Ticket/123',
		required: true,
		description: 'API endpoint path (e.g., /Ticket/123 or /Change)',
	},
	{
		displayName: 'Request Body',
		name: 'body',
		type: 'json',
		displayOptions: {
			show: showOnlyForAssistanceManagementCustomApiCall,
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
			show: showOnlyForAssistanceManagementCustomApiCall,
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
