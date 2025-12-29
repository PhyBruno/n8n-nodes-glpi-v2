import type { INodeProperties } from 'n8n-workflow';

export const toolManagementUpdateDescription: INodeProperties[] = [
	{
		displayName: 'PUT /apirest.php/{ItemType}/{ItemID}',
		name: 'toolManagementUpdateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['Tool Management'],
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
				resource: ['Tool Management'],
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
				resource: ['Tool Management'],
				operation: ['update'],
			},
		},
		default: '{}',
		description: 'JSON payload to update the item',
	},
];
