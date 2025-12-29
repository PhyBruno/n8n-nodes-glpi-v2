import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssistanceManagementSolve = {
	operation: ['solve'],
	resource: ['Assistance Management'],
};

export const assistanceManagementSolveDescription: INodeProperties[] = [
	{
		displayName: 'POST /apirest.php/ITILSolution',
		name: 'assistanceManagementSolveNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForAssistanceManagementSolve,
		},
		description: 'Solve an assistance management item (Ticket, Change, Problem)',
	},
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: showOnlyForAssistanceManagementSolve,
		},
		default: 0,
		required: true,
		description: 'ID of the item to solve',
	},
	{
		displayName: 'User ID',
		name: 'users_id',
		type: 'number',
		displayOptions: {
			show: showOnlyForAssistanceManagementSolve,
		},
		default: 0,
		required: true,
		description: 'ID of the user who resolved the item',
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		displayOptions: {
			show: showOnlyForAssistanceManagementSolve,
		},
		default: '',
		required: true,
		description: 'Solution content',
	},
];
