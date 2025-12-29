import type { INodeProperties } from 'n8n-workflow';

const showOnlyForManagementCreate = {
	operation: ['create'],
	resource: ['Management'],
};

export const managementCreateDescription: INodeProperties[] = [
    {
		displayName: 'POST /apirest.php/{ItemType}',
		name: 'administrationManagementCreateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForManagementCreate,
		},
		description: 'Create a new administration item. The ItemType Can be: User, Group and Profile.',
	},
	// Future UI fields will be added here
];

