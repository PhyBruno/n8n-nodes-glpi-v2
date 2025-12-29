import type { INodeProperties } from 'n8n-workflow';

export const administrationManagementGroupDescription: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Administration Management'],
				operation: ['getGroup'],
			},
		},
		default: 0,
		description: 'ID of the group to retrieve or update. Leave empty to get all groups.',
	},
	{
		displayName: 'GET /apirest.php/Group/{ItemID}',
		name: 'groupGetNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['Administration Management'],
				operation: ['getGroup'],
			},
		},
		description: 'Retrieve a specific group by its ID',
	},
	{
		displayName: 'PUT /apirest.php/Group/{ItemID}',
		name: 'groupUpdateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['Administration Management'],
				operation: ['updateGroup'],
			},
		},
		description: 'Update an existing group',
	},
];

