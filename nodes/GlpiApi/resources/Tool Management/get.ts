import type { INodeProperties } from 'n8n-workflow';

export const toolManagementGetDescription: INodeProperties[] = [
	{
		displayName: 'GET /apirest.php/{ItemType}/{ItemID}',
		name: 'toolManagementGetNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['Tool Management'],
				operation: ['get'],
			},
		},
		description: 'Retrieve a specific item by its ID',
	},
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
