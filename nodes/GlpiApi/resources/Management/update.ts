import type { INodeProperties } from 'n8n-workflow';

const showOnlyForManagementUpdate = {
	operation: ['update'],
	resource: ['Management'],
};

export const managementUpdateDescription: INodeProperties[] = [
	{
		displayName: 'PUT /apirest.php/{ItemType}/{ItemID}',
		name: 'administrationManagementUpdateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForManagementUpdate,
		},
		description: 'Update an existing administration item. The ItemType Can be: User, Group and Profile.',
	},
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: showOnlyForManagementUpdate,
		},
		default: 0,
		required: true,
		description: 'ID of the administration item to update',
	},
	{
		displayName: 'Payload (JSON)',
		name: 'payload',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: showOnlyForManagementUpdate,
		},
		description: 'JSON payload to update the administration item',
	},
];

