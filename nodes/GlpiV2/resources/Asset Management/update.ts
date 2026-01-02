import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssetManagementUpdate = {
	operation: ['update'],
	resource: ['Asset Management'],
};

export const AssetManagementUpdateDescription: INodeProperties[] = [
    {
		displayName: 'PUT /apirest.php/{ItemType}/{ItemID}',
		name: 'assetManagementUpdateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForAssetManagementUpdate,
		},
		description: 'Update an existing asset. The ItemType Can be: Computer, Monitor, Software, Network Equipment, Peripheral, Printer, Cartridge, Consumable, Phone, Rack, Enclosure, PDU, Passive Device, Unmanaged Device, Cable, SIM Card, Camera.',
	},
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: showOnlyForAssetManagementUpdate,
		},
		default: 0,
		required: true,
		description: 'ID of the asset to update',
	},
	// Future UI fields will be added here
];

