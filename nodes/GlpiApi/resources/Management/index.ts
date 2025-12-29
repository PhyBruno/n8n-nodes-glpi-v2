import type { INodeProperties } from 'n8n-workflow';
import { managementGetDescription } from './get';
import { managementCreateDescription } from './create';
import { managementUpdateDescription } from './update';
import { managementDeleteDescription } from './delete';
import { managementOptionsDescription } from './options';

const showOnlyForManagement = {
	resource: ['Management'],
};

export const managementDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForManagement,
		},
		options: [
			// {
			// 	name: 'Create an Administration Item',
			// 	value: 'create',
			// 	action: 'Create a new administration item',
			// 	description: 'Create a new administration item',
			// },
			{
				name: 'Get an Administration Item',
				value: 'get',
				action: 'Get an administration item',
				description: 'Get the data of a single administration item',
			},
			{
				name: 'Update an Administration Item',
				value: 'update',
				action: 'Update an administration item',
				description: 'Update an existing administration item',
			},
			{
				name: 'Delete an Administration Item',
				value: 'delete',
				action: 'Delete an administration item',
			},
		],
		default: 'get',
	},
	{
		displayName: 'Item Type',
		name: 'itemtype',
		type: 'options',
		displayOptions: {
			show: showOnlyForManagement,
		},
        options: [
            { name: 'Appliance', value: 'Appliance' },
            { name: 'Budget', value: 'Budget' },
            { name: 'Certificate', value: 'Certificate' },
            { name: 'Cluster', value: 'Cluster' },
            { name: 'Contact', value: 'Contact' },
            { name: 'Contract', value: 'Contract' },
            { name: 'Data Center', value: 'Datacenter' },
            { name: 'Data Center Room', value: 'DCRoom' },
            { name: 'Database', value: 'Database' },
            { name: 'Database Instance', value: 'DatabaseInstance' },
            { name: 'Document', value: 'Document' },
            { name: 'Domain', value: 'Domain' },
            { name: 'Domain Record', value: 'DomainRecord' },
            { name: 'License', value: 'SoftwareLicense' },
            { name: 'Phone Line', value: 'Line' },
            { name: 'Supplier', value: 'Supplier' },
        ],
		default: 'SoftwareLicense',
		required: true,
		description: 'Type of administration item',
	},
	...managementGetDescription,
	...managementCreateDescription,
	...managementUpdateDescription,
	...managementDeleteDescription,
	...managementOptionsDescription,
];

