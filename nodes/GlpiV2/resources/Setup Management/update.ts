import type { INodeProperties } from 'n8n-workflow';

export const setupManagementUpdateDescription: INodeProperties[] = [
	{
		displayName: 'PUT /apirest.php/{ItemType}/{ItemID}',
		name: 'setupManagementUpdateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['Setup Management'],
				operation: ['update'],
			},
		},
		description: 'Update an existing item',
	},
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
	// Future UI fields will be added here
];
