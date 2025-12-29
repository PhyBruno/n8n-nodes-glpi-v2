import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssistanceManagementDelete = {
	operation: ['delete'],
	resource: ['Assistance Management'],
};

export const assistanceManagementDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: showOnlyForAssistanceManagementDelete,
		},
		default: 0,
		required: true,
		description: 'ID of the item to delete',
	},
	{
		displayName: 'DELETE /apirest.php/{ItemType}/{ItemID}',
		name: 'assistanceManagementDeleteNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForAssistanceManagementDelete,
		},
		description: 'Delete an assistance management item',
	},
];
