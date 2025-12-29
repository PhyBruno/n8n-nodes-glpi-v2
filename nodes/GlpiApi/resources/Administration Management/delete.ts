import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAdministrationManagementDelete = {
	resource: ['Administration Management'],
	operation: ['deleteUser', 'deleteGroup', 'deleteProfile'],
};

export const administrationManagementDeleteDescription: INodeProperties[] = [
	{
		displayName: 'DELETE /apirest.php/{ItemType}/{ItemID}',
		name: 'administrationManagementDeleteNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForAdministrationManagementDelete,
		},
		description: 'Delete an administration item',
	},
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: showOnlyForAdministrationManagementDelete,
		},
		default: 0,
		required: true,
		description: 'ID of the item to delete',
	},
];
