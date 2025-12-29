import type { INodeProperties } from 'n8n-workflow';

export const setupManagementGetDescription: INodeProperties[] = [
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Setup Management'],
				operation: ['get'],
			},
		},
		default: 0,
		required: true,
		description: 'ID of the item',
	},
];
