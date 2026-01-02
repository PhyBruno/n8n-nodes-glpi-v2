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
	// Future UI fields will be added here
];
