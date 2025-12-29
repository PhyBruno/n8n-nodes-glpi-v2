import type { INodeProperties } from 'n8n-workflow';

export const setupManagementCreateDescription: INodeProperties[] = [
	{
		displayName: 'Payload (JSON)',
		name: 'payload',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['Setup Management'],
				operation: ['create'],
			},
		},
		default: '{}',
		description: 'JSON payload to create the item',
	},
];
