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
	// Future UI fields will be added here
];
