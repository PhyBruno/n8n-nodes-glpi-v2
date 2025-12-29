import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAdministrationManagementGet = {
	operation: ['get'],
	resource: ['Administration Management'],
};

export const administrationManagementGetDescription: INodeProperties[] = [
	{
		displayName: 'User ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: showOnlyForAdministrationManagementGet,
		},
		default: 0,
		description: 'ID of the user to retrieve. Leave empty to get all users.',
	},
];

