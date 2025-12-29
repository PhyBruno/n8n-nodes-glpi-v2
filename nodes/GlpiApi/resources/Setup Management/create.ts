import type { INodeProperties } from 'n8n-workflow';

export const setupManagementCreateDescription: INodeProperties[] = [
	{
		displayName: 'POST /apirest.php/{ItemType}',
		name: 'setupManagementCreateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['Setup Management'],
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
				resource: ['Setup Management'],
				operation: ['create'],
			},
		},
		default: '{}',
		description: 'JSON payload to create the item',
	},
];
