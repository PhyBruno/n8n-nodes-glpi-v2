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
		description: 'ID of the group to retrieve or update. Leave empty to get all groups',
	},
	{
		displayName: 'Payload (JSON)',
		name: 'payload',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: {
				resource: ['Administration Management'],
				operation: ['createGroup', 'updateGroup'],
			},
		},
		description: 'JSON payload to create or update the group',
	},
];

