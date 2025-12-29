import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSetupManagementDelete = {
	operation: ['delete'],
	resource: ['Setup Management'],
};

export const setupManagementDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: showOnlyForSetupManagementDelete,
		},
		default: 0,
		required: true,
		description: 'ID of the item to delete',
	},
	{
		displayName: 'DELETE /apirest.php/{ItemType}/{ItemID}',
		name: 'setupManagementDeleteNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForSetupManagementDelete,
		},
		description: 'Delete a setup management item',
	},
];
