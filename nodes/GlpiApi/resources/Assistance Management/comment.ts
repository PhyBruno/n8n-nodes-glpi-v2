import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssistanceManagementComment = {
	operation: ['comment'],
	resource: ['Assistance Management'],
};

export const assistanceManagementCommentDescription: INodeProperties[] = [
	{
		displayName: 'POST /apirest.php/ITILFollowup/{ItemType}/{ItemID}',
		name: 'assistanceManagementCommentNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForAssistanceManagementComment,
		},
		description: 'Add a comment to an Assistance Management item',
	},
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: showOnlyForAssistanceManagementComment,
		},
		default: 0,
		required: true,
		description: 'ID of the Assistance Management item to comment on',
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		displayOptions: {
			show: showOnlyForAssistanceManagementComment,
		},
		default: '',
		required: true,
		description: 'Content of the comment',
	},
	{
		displayName: 'Private Comment',
		name: 'isPrivate',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForAssistanceManagementComment,
		},
		description: 'Whether the comment should be private, add is_private: 1 for private comments and is_private: 0 for public comments in the payload',
	},
];

