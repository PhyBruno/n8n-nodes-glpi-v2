import type { INodeProperties } from 'n8n-workflow';
import { assistanceManagementGetDescription } from './get';
import { assistanceManagementCreateDescription } from './create';
import { assistanceManagementUpdateDescription } from './update';
import { assistanceManagementCommentDescription } from './comment';
import { assistanceManagementSolveDescription } from './solve';
import { assistanceManagementDeleteDescription } from './delete';

const showOnlyForAssistanceManagement = {
	resource: ['Assistance Management'],
};

export const assistanceManagementDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAssistanceManagement,
		},
		options: [
			{
				name: 'Comment on an Assistance Management Item',
				value: 'comment',
				action: 'Add a comment to an assistance management item',
				description: 'Add a comment to an assistance management item',
			},
			{
				name: 'Create an Assistance Management Item',
				value: 'create',
				action: 'Create a new assistance management item',
				description: 'Create a new Assistance Management item',
			},
			{
				name: 'Delete an Assistance Management Item',
				value: 'delete',
				action: 'Delete an assistance management item',
				description: 'Delete an existing ITIL object',
			},
			{
				name: 'Get an Assistance Management Item',
				value: 'get',
				action: 'Get an assistance management item',
				description: 'Get the data of a single Assistance Management item',
			},
			{
				name: 'Solve an Assistance Management Item',
				value: 'solve',
				action: 'Solve an assistance management item',
				description: 'Solve a Ticket, Change, or Problem',
			},
			{
				name: 'Update an Assistance Management Item',
				value: 'update',
				action: 'Update an assistance management item',
				description: 'Update an existing ITIL object',
			},
		],
		default: 'get',
	},

	// ------------------------------
	{
		displayName: 'Item Type',
		name: 'itemtype',
		type: 'options',
		displayOptions: {
			show: showOnlyForAssistanceManagement,
		},
		options: [
			{ name: 'Ticket', value: 'Ticket' },
			{ name: 'Change', value: 'Change' },
			{ name: 'Problem', value: 'Problem' },
		],
		default: 'Ticket',
		required: true,
		description: 'Type of Assistance Management item',
	},
	...assistanceManagementGetDescription,
	...assistanceManagementCreateDescription,
	...assistanceManagementUpdateDescription,
	...assistanceManagementDeleteDescription,
	...assistanceManagementCommentDescription,
	...assistanceManagementSolveDescription,
];
