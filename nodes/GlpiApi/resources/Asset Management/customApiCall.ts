import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssetManagementCustomApiCall = {
	operation: ['customApiCall'],
	resource: ['Asset Management'],
};

export const assetManagementCustomApiCallDescription: INodeProperties[] = [
	{
		displayName: 'HTTP Method',
		name: 'method',
		type: 'options',
		displayOptions: {
			show: showOnlyForAssetManagementCustomApiCall,
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
			show: showOnlyForAssetManagementCustomApiCall,
		},
		default: '',
		placeholder: '/Computer/123',
		required: true,
		description: 'API endpoint path (e.g., /Computer/123 or /Monitor)',
	},
	{
		displayName: 'Request Body',
		name: 'body',
		type: 'json',
		displayOptions: {
			show: showOnlyForAssetManagementCustomApiCall,
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
			show: showOnlyForAssetManagementCustomApiCall,
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
