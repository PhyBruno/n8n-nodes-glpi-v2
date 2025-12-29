import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssistanceManagementUpdate = {
	operation: ['update'],
	resource: ['Assistance Management'],
};

export const assistanceManagementUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: showOnlyForAssistanceManagementUpdate,
		},
		default: 0,
		required: true,
		description: 'ID of the Assistance Management item to update',
	},
	{
		displayName: 'PUT /apirest.php/{ItemType}/{ItemID}',
		name: 'assistanceManagementUpdateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForAssistanceManagementUpdate,
		},
		description:
			'Update an existing Assistance Management item (Ticket, Change, Problem, etc.). ' +
			'The payload must be a valid JSON object.',
	},
	{
		displayName: 'Payload (JSON)',
		name: 'payload',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: showOnlyForAssistanceManagementUpdate,
		},
		description: 'JSON payload to update the Assistance Management item',
	},
];
