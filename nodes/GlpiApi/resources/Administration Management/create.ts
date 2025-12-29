import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAdministrationManagementCreate = {
	operation: ['create'],
	resource: ['Administration Management'],
};

export const administrationManagementCreateDescription: INodeProperties[] = [
	{
		displayName: 'Payload (JSON)',
		name: 'payload',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: showOnlyForAdministrationManagementCreate,
		},
		description: 'JSON payload to create the user',
	},
];

