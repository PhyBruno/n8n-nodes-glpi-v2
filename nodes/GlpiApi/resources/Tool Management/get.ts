import type { INodeProperties } from 'n8n-workflow';

export const toolManagementGetDescription: INodeProperties[] = [
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Tool Management'],
				operation: ['get'],
			},
		},
		default: 0,
		required: true,
		description: 'ID of the item',
	},
];
