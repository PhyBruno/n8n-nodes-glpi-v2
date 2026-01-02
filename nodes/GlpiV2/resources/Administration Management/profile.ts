import type { INodeProperties } from 'n8n-workflow';

export const administrationManagementProfileDescription: INodeProperties[] = [
	{
		displayName: 'POST /apirest.php/{ItemType}',
		name: 'profileCreateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['Administration Management'],
				operation: ['createProfile'],
			},
		},
		description: 'Create a new profile',
	},
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
		description: 'ID of the profile to retrieve or update. Leave empty to get all profiles.',
	},
	{
		displayName: 'GET /apirest.php/{ItemType}/{ItemID}',
		name: 'profileGetNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['Administration Management'],
				operation: ['getProfile'],
			},
		},
		description: 'Retrieve a specific profile by its ID',
	},
	{
		displayName: 'PUT /apirest.php/{ItemType}/{ItemID}',
		name: 'profileUpdateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['Administration Management'],
				operation: ['updateProfile'],
			},
		},
		description: 'Update an existing profile',
	},
];

