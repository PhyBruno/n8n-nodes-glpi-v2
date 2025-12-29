import type { INodeProperties } from 'n8n-workflow';

export const administrationManagementProfileDescription: INodeProperties[] = [
	{
		displayName: 'Profile ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Administration Management'],
				operation: ['getProfile', 'updateProfile'],
			},
		},
		default: 0,
		description: 'ID of the profile to retrieve or update. Leave empty to get all profiles',
	},
	{
		displayName: 'Payload (JSON)',
		name: 'payload',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: {
				resource: ['Administration Management'],
				operation: ['createProfile', 'updateProfile'],
			},
		},
		description: 'JSON payload to create or update the profile',
	},
];

