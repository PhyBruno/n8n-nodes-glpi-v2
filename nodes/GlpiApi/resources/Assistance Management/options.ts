import type { INodeProperties } from 'n8n-workflow';

export const assistanceManagementOptionsDescription: INodeProperties[] = [
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['Assistance Management'],
				operation: ['create', 'update'],
			},
		},
		options: [
			// Future optional fields will be added here
		],
	},
];
