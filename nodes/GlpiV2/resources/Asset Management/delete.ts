import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssetManagementDelete = {
	operation: ['delete'],
	resource: ['Asset Management'],
};

export const assetManagementDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: showOnlyForAssetManagementDelete,
		},
		default: 0,
		required: true,
		description: 'ID of the asset to delete',
	},
	{
		displayName: 'DELETE /apirest.php/{ItemType}/{ItemID}',
		name: 'assetManagementDeleteNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForAssetManagementDelete,
		},
		description: 'Delete an asset',
	},
];
