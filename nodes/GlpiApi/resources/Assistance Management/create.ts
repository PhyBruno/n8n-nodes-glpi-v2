import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssistanceManagementCreate = {
	operation: ['create'],
	resource: ['Assistance Management'],
};

export const assistanceManagementCreateDescription: INodeProperties[] = [
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForAssistanceManagementCreate,
		},
		description: 'Title of the item',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForAssistanceManagementCreate,
		},
		description: 'Content/Description of the item',
	},
	{
		displayName: 'Opening Date',
		name: 'opening_date',
		type: 'dateTime',
		default: '',
		displayOptions: {
			show: showOnlyForAssistanceManagementCreate,
		},
		description: 'Date of creation',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'number',
		default: 1,
		displayOptions: {
			show: showOnlyForAssistanceManagementCreate,
		},
		description: 'Status ID of the item',
	},
	{
		displayName: 'Category ID',
		name: 'itilcategories_id',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnlyForAssistanceManagementCreate,
		},
	},
	{
		displayName: 'Requester (ID or Email)',
		name: 'users_id_requester',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForAssistanceManagementCreate,
		},
		description: 'User ID or Email of the requester',
	},
	{
		displayName: 'Observer (ID or Email)',
		name: 'users_id_observer',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForAssistanceManagementCreate,
		},
		description: 'User ID or Email of the observer',
	},
	{
		displayName: 'Assigned To (ID)',
		name: 'users_id_assign',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnlyForAssistanceManagementCreate,
		},
		description: 'User ID to assign the item to',
	},
	// Future UI fields will be added here
];
