import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssetManagementCreate = {
	operation: ['create'],
	resource: ['Asset Management'],
};

export const AssetManagementCreateDescription: INodeProperties[] = [
    {
		displayName: 'POST /apirest.php/{ItemType}',
		name: 'assetManagementCreateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForAssetManagementCreate,
		},
		description: 'Create a new asset. The ItemType Can be: Computer, Monitor, Software, Network Equipment, Peripheral, Printer, Cartridge, Consumable, Phone, Rack, Enclosure, PDU, Passive Device, Unmanaged Device, Cable, SIM Card, Camera.',
	},
	{
		displayName: 'Payload (JSON)',
		name: 'payload',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: showOnlyForAssetManagementCreate,
		},
		description: 'JSON payload to create the asset. The payload must be a valid JSON object with the properties of the asset.',
	},
];

