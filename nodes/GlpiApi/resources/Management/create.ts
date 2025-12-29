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
	{
		displayName: 'Payload (JSON)',
		name: 'payload',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: showOnlyForManagementCreate,
		},
		description: 'JSON payload to create the administration item',
	},
];

