import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssistanceManagementGet = {
	operation: ['get'],
	resource: ['Assistance Management'],
};

export const assistanceManagementGetDescription: INodeProperties[] = [
	{
		displayName: 'GET /apirest.php/{ItemType}/{ItemID}',
		name: 'itilObjectsGetNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForAssistanceManagementGet,
		},
		description:
			'Retrieve a specific ITIL object (Ticket, Change, Problem, etc.) by its ID. ' +
			'If TicketID is 0 or empty, all objects of the selected type will be returned.',
	},
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: showOnlyForAssistanceManagementGet,
		},
		default: 0,
		description:
			'ID of the ITIL object to retrieve. Use 0 to fetch all objects.',
	},
];