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
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForAssistanceManagementUpdate,
		},
		description: 'Title of the item',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForAssistanceManagementUpdate,
		},
		description: 'Content/Description of the item',
	},
	{
		displayName: 'Status',
		name: 'status_ticket',
		type: 'options',
		default: 1,
		displayOptions: {
			show: {
				...showOnlyForAssistanceManagementUpdate,
				itemtype: ['Ticket'],
			},
		},
		options: [
			{ name: 'New', value: 1 },
			{ name: 'Processing (Assigned)', value: 2 },
			{ name: 'Processing (Planned)', value: 3 },
			{ name: 'Pending', value: 4 },
			{ name: 'Solved', value: 5 },
			{ name: 'Closed', value: 6 },
		],
		description: 'Status of the ticket',
	},
	{
		displayName: 'Status',
		name: 'status_problem',
		type: 'options',
		default: 1,
		displayOptions: {
			show: {
				...showOnlyForAssistanceManagementUpdate,
				itemtype: ['Problem'],
			},
		},
		options: [
			{ name: 'New', value: 1 },
			{ name: 'Processing (Assigned)', value: 2 },
			{ name: 'Processing (Planned)', value: 3 },
			{ name: 'Pending', value: 4 },
			{ name: 'Solved', value: 5 },
			{ name: 'Closed', value: 6 },
			{ name: 'Accepted', value: 7 },
			{ name: 'Under Observation', value: 8 },
		],
		description: 'Status of the problem',
	},
	{
		displayName: 'Status',
		name: 'status_change',
		type: 'options',
		default: 1,
		displayOptions: {
			show: {
				...showOnlyForAssistanceManagementUpdate,
				itemtype: ['Change'],
			},
		},
		options: [
			{ name: 'New', value: 1 },
			{ name: 'Pending', value: 4 },
			{ name: 'Solved', value: 5 },
			{ name: 'Closed', value: 6 },
			{ name: 'Accepted', value: 7 },
			{ name: 'Review', value: 8 },
		],
		description: 'Status of the change',
	},
	{
		displayName: 'Requester (ID or Email)',
		name: 'users_id_requester',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForAssistanceManagementUpdate,
		},
		description: 'User ID or Email of the requester',
	},
	{
		displayName: 'Assigned To (ID)',
		name: 'users_id_assign',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnlyForAssistanceManagementUpdate,
		},
		description: 'User ID to assign the item to',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: showOnlyForAssistanceManagementUpdate,
		},
		options: [
			{
				displayName: 'Category ID',
				name: 'itilcategories_id',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Observer (ID or Email)',
				name: 'users_id_observer',
				type: 'string',
				default: '',
				description: 'User ID or Email of the observer',
			},
		],
	},
];
