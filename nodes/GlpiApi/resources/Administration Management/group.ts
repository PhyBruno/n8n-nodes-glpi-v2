import type { INodeProperties } from 'n8n-workflow';

export const administrationManagementGroupDescription: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Administration Management'],
				operation: ['getGroup', 'updateGroup'],
			},
		},
		default: 0,
		description: 'ID of the group to retrieve or update. Leave empty to get all groups.',
	},

];

