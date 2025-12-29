import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAdministrationManagementCreate = {
	operation: ['create'],
	resource: ['Administration Management'],
};

export const administrationManagementCreateDescription: INodeProperties[] = [
	{
		displayName: 'POST /apirest.php/{ItemType}',
		name: 'administrationManagementCreateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForAdministrationManagementCreate,
		},
		description: 'Create a new user or group or profile',
	},
	// Future UI fields will be added here
];
