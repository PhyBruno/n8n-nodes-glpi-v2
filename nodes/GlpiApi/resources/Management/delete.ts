import type { INodeProperties } from 'n8n-workflow';

const showOnlyForManagementDelete = {
	operation: ['delete'],
	resource: ['Management'],
};

export const managementDeleteDescription: INodeProperties[] = [
	{
		displayName: 'DELETE /apirest.php/{ItemType}/{ItemID}',
		name: 'managementDeleteNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForManagementDelete,
		},
		description: 'Delete a management item',
	},
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: showOnlyForManagementDelete,
		},
		default: 0,
		required: true,
		description: 'ID of the item to delete',
	},
];
