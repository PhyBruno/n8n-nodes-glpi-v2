import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssetManagementGet = {
	operation: ['get'],
	resource: ['Asset Management'],
};

export const AssetManagementGetDescription: INodeProperties[] = [
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: showOnlyForAssetManagementGet,
		},
		default: 0,
		description: 'ID of the asset to retrieve. Leave empty to get all assets of the selected type.',
	},
	{
		displayName: 'GET /apirest.php/{ItemType}/{ItemID}',
		name: 'assetManagementGetNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForAssetManagementGet,
		},
		description: 'Get the data of a single asset. The ItemType Can be: Computer, Monitor, Software, Network Equipment, Peripheral, Printer, Cartridge, Consumable, Phone, Rack, Enclosure, PDU, Passive Device, Unmanaged Device, Cable, SIM Card, Camera.',
	},
];

