import type { INodeProperties } from 'n8n-workflow';
import { setupManagementCreateDescription } from './create';
import { setupManagementGetDescription } from './get';
import { setupManagementUpdateDescription } from './update';
import { setupManagementDeleteDescription } from './delete';
import { setupManagementOptionsDescription } from './options';

const showOnlyForSetupManagement = {
	resource: ['Setup Management'],
};

export const setupManagementDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSetupManagement,
		},
		options: [
			// {
			// 	name: 'Create',
			// 	value: 'create',
			// 	action: 'Create an item',
			// 	description: 'Create a new item',
			// },
			{
				name: 'Get',
				value: 'get',
				action: 'Get an item',
				description: 'Get an item',
			},
			// {
			// 	name: 'Update',
			// 	value: 'update',
			// 	action: 'Update an item',
			// 	description: 'Update an existing item',
			// },
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete an item',
			},

		],
		default: 'get',
	},
	{
		displayName: 'Item Type',
		name: 'itemtype',
		type: 'options',
		displayOptions: {
			show: showOnlyForSetupManagement,
		},
		options: [
			{ name: 'Assets Definition', value: 'AssetDefinition' },
			{ name: 'Automatic Action', value: 'CronTask' },
			{ name: 'Battery', value: 'DeviceBattery' },
			{ name: 'Camera', value: 'DeviceCamera' },
			{ name: 'Case', value: 'DeviceCase' },
			{ name: 'Controller', value: 'DeviceControl' },
			{ name: 'Drive', value: 'DeviceDrive' },
			{ name: 'External Link', value: 'Link' },
			{ name: 'Firmware', value: 'DeviceFirmware' },
			{ name: 'General Config', value: 'Config' },
			{ name: 'Generic Device', value: 'DeviceGeneric' },
			{ name: 'Graphic Card', value: 'DeviceGraphicCard' },
			{ name: 'Hard Drive', value: 'DeviceHardDrive' },
			{ name: 'Memory', value: 'DeviceMemory' },
			{ name: 'Network Card', value: 'DeviceNetworkCard' },
			{ name: 'PCI Device', value: 'DevicePci' },
			{ name: 'Plugin', value: 'Plugin' },
			{ name: 'Power Supply', value: 'DevicePowerSupply' },
			{ name: 'Processor', value: 'DeviceProcessor' },
			{ name: 'Receiver (Mail Collector)', value: 'MailCollector' },
			{ name: 'Sensor', value: 'DeviceSensor' },
			{ name: 'Sim Card', value: 'DeviceSimcard' },
			{ name: 'SLM', value: 'SLM' },
			{ name: 'Sound Card', value: 'DeviceSoundCard' },
			{ name: 'System Board/Motherboard', value: 'DeviceMotherboard' },
			{ name: 'Webhook', value: 'Webhook' },
		],
		default: 'AssetDefinition',
		required: true,
		description: 'Type of item',
	},
	...setupManagementCreateDescription,
	...setupManagementGetDescription,
	...setupManagementUpdateDescription,
	...setupManagementDeleteDescription,
	...setupManagementOptionsDescription,
];
