import type { INodeProperties } from 'n8n-workflow';

export const toolManagementCreateDescription: INodeProperties[] = [
	{
		displayName: 'POST /apirest.php/{ItemType}',
		name: 'toolManagementCreateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['Tool Management'],
				operation: ['create'],
			},
		},
		description: 'Create a new item',
	},
	{
		displayName: 'Payload (JSON)',
		name: 'payload',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['Tool Management'],
				operation: ['create'],
			},
		},
		default: '{}',
		description: 'JSON payload to create the item',
	},
];
