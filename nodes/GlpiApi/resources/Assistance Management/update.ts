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
		displayName: 'Opening Date',
		name: 'opening_date',
		type: 'dateTime',
		default: '',
		displayOptions: {
			show: showOnlyForAssistanceManagementUpdate,
		},
		description: 'Date of creation',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'number',
		default: 1,
		displayOptions: {
			show: showOnlyForAssistanceManagementUpdate,
		},
		description: 'Status ID of the item',
	},
	{
		displayName: 'Category ID',
		name: 'itilcategories_id',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnlyForAssistanceManagementUpdate,
		},
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
		displayName: 'Observer (ID or Email)',
		name: 'users_id_observer',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForAssistanceManagementUpdate,
		},
		description: 'User ID or Email of the observer',
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
	// Future UI fields will be added here
];
