import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssistanceManagementCreate = {
	operation: ['create'],
	resource: ['Assistance Management'],
};

export const assistanceManagementCreateDescription: INodeProperties[] = [
	{
		displayName: 'POST /apirest.php/{ItemType}',
		name: 'itilObjectsCreateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForAssistanceManagementCreate,
		},
		description:
			'Create a new ITIL object (Ticket, Change, Problem, etc.). ' +
			'The payload must be a valid JSON object.',
	},
	// Future UI fields will be added here
];
