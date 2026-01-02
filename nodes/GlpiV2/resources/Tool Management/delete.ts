import type { INodeProperties } from 'n8n-workflow';

const showOnlyForToolManagementDelete = {
	operation: ['delete'],
	resource: ['Tool Management'],
};

export const toolManagementDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: showOnlyForToolManagementDelete,
		},
		default: 0,
		required: true,
		description: 'ID of the item to delete',
	},
	{
		displayName: 'DELETE /apirest.php/{ItemType}/{ItemID}',
		name: 'toolManagementDeleteNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForToolManagementDelete,
		},
		description: 'Delete a tool management item',
	},
];
