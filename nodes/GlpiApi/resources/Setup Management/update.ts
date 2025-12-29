import type { INodeProperties } from 'n8n-workflow';

export const setupManagementUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Setup Management'],
				operation: ['update'],
			},
		},
		default: 0,
		required: true,
		description: 'ID of the item',
	},
	{
		displayName: 'Payload (JSON)',
		name: 'payload',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['Setup Management'],
				operation: ['update'],
			},
		},
		default: '{}',
		description: 'JSON payload to update the item',
	},
];
