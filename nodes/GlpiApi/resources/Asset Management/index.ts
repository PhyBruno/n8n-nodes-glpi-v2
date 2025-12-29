import type { INodeProperties } from 'n8n-workflow';
import { AssetManagementGetDescription } from './get';
import { AssetManagementCreateDescription } from './create';
import { AssetManagementUpdateDescription } from './update';
import { assetManagementCustomApiCallDescription } from './customApiCall';
import { assetManagementOptionsDescription } from './options';

const showOnlyForAssetManagement = {
	resource: ['Asset Management'],
};

export const AssetManagementDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAssetManagement,
		},
		options: [
		{
			name: 'Create an Asset',
			value: 'create',
			action: 'Create a new asset',
			description: 'Create a new asset',
		},
		{
			name: 'Custom API Call',
			value: 'customApiCall',
			action: 'Make a custom API call',
			description: 'Make a custom API call with full control',
		},
		{
			name: 'Get an Asset',
			value: 'get',
			action: 'Get an asset',
			description: 'Get the data of a single asset',
		},
		{
			name: 'Update an Asset',
			value: 'update',
			action: 'Update an asset',
			description: 'Update an existing asset',
		},
	],
		default: 'get',
	},
	{
		displayName: 'Item Type',
		name: 'itemtype',
		type: 'options',
		displayOptions: {
			show: showOnlyForAssetManagement,
		},
		options: [

			{ name: 'Cable', value: 'Cable' },

			{ name: 'Cartridge', value: 'CartridgeItem' },
			{ name: 'Computer', value: 'Computer' },
			{ name: 'Consumable', value: 'ConsumableItem' },
			{ name: 'Enclosure', value: 'Enclosure' },
			{ name: 'Monitor', value: 'Monitor' },
			{ name: 'Network Equipment', value: 'NetworkEquipment' },
			{ name: 'Passive Device', value: 'PassiveDCEquipment' },
			{ name: 'PDU', value: 'PDU' },
			{ name: 'Peripheral', value: 'Peripheral' },
			{ name: 'Phone', value: 'Phone' },
			{ name: 'Printer', value: 'Printer' },
			{ name: 'Rack', value: 'Rack' },

			{ name: 'Software', value: 'Software' },

		],
		default: 'Computer',
		required: true,
		description: 'Type of asset',
	},
	...AssetManagementGetDescription,
	...AssetManagementCreateDescription,
	...AssetManagementUpdateDescription,
	...assetManagementCustomApiCallDescription,
	...assetManagementOptionsDescription,
];

