import type { INodeProperties } from 'n8n-workflow';

export const toolManagementOptionsDescription: INodeProperties[] = [
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['Tool Management'],
				operation: ['create', 'update'],
			},
		},
		options: [
			// Project Options
			{
				displayName: 'Code',
				name: 'code',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						itemtype: ['Project'],
					},
				},
				description: 'Code of the project',
			},
			{
				displayName: 'Comments',
				name: 'comment',
				type: 'string',
				default: '',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				displayOptions: {
					show: {
						itemtype: ['Project'],
					},
				},
				description: 'Comments for the project',
			},
			{
				displayName: 'Group ID',
				name: 'groups_id',
				type: 'number',
				default: 0,
				displayOptions: {
					show: {
						itemtype: ['Project'],
					},
				},
				description: 'ID of the group',
			},
			{
				displayName: 'Manager User ID',
				name: 'users_id',
				type: 'number',
				default: 0,
				displayOptions: {
					show: {
						itemtype: ['Project'],
					},
				},
				description: 'ID of the manager user',
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'number',
				default: 3,
				displayOptions: {
					show: {
						itemtype: ['Project'],
					},
				},
				description: 'Priority of the project',
			},
			{
				displayName: 'State ID',
				name: 'projectstates_id',
				type: 'number',
				default: 0,
				displayOptions: {
					show: {
						itemtype: ['Project'],
					},
				},
				description: 'ID of the project state',
			},
			{
				displayName: 'Type ID',
				name: 'projecttypes_id',
				type: 'number',
				default: 0,
				displayOptions: {
					show: {
						itemtype: ['Project'],
					},
				},
				description: 'ID of the project type',
			},
		],
	},
];
