import type { INodeProperties } from 'n8n-workflow';
import { toolManagementCreateDescription } from './create';
import { toolManagementGetDescription } from './get';
import { toolManagementUpdateDescription } from './update';
import { toolManagementCustomApiCallDescription } from './customApiCall';
import { toolManagementOptionsDescription } from './options';

const showOnlyForToolManagement = {
	resource: ['Tool Management'],
};

export const toolManagementDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForToolManagement,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create an item',
				description: 'Create a new item',
			},
			{
				name: 'Custom API Call',
				value: 'customApiCall',
				action: 'Make a custom API call',
				description: 'Make a custom API call with full control',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an item',
				description: 'Get an item',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update an item',
				description: 'Update an existing item',
			},
		],
		default: 'get',
	},
	{
		displayName: 'Item Type',
		name: 'itemtype',
		type: 'options',
		displayOptions: {
			show: showOnlyForToolManagement,
		},
		options: [
			{ name: 'Knowledge Base Item', value: 'KnowbaseItem' },
			{ name: 'Project', value: 'Project' },
			{ name: 'Project Task', value: 'ProjectTask' },
			{ name: 'Reminder (Public)', value: 'Reminder' },
			{ name: 'RSS Feed (Public)', value: 'RSSFeed' },
			{ name: 'Saved Search', value: 'SavedSearch' },
		],
		default: 'Project',
		required: true,
		description: 'Type of item',
	},
	...toolManagementCreateDescription,
	...toolManagementGetDescription,
	...toolManagementUpdateDescription,
	...toolManagementCustomApiCallDescription,
	...toolManagementOptionsDescription,
];
