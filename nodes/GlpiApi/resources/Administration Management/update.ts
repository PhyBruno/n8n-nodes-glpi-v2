import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAdministrationManagementUpdate = {
	operation: ['update'],
	resource: ['Administration Management'],
};

export const administrationManagementUpdateDescription: INodeProperties[] = [
	{
		displayName: 'PUT /apirest.php/User/{ItemID}',
		name: 'administrationManagementUpdateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForAdministrationManagementUpdate,
		},
		description: 'Update an existing user',
	},
	{
		displayName: 'User ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: showOnlyForAdministrationManagementUpdate,
		},
		default: 0,
		required: true,
		description: 'ID of the user to update',
	},
	// Future UI fields will be added here
];

