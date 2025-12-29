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
			{
				displayName: 'As Child of (Task ID)',
				name: 'projecttasks_id',
				type: 'number',
				default: 0,
				displayOptions: {
					show: {
						itemtype: ['ProjectTask'],
					},
				},
				description: 'ID of the parent task',
			},
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
				displayName: 'Code',
				name: 'code',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						itemtype: ['ProjectTask'],
					},
				},
				description: 'Code of the project task',
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
				displayName: 'Comments',
				name: 'comment',
				type: 'string',
				default: '',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				displayOptions: {
					show: {
						itemtype: ['ProjectTask'],
					},
				},

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
				displayName: 'Group ID',
				name: 'groups_id',
				type: 'number',
				default: 0,
				displayOptions: {
					show: {
						itemtype: ['ProjectTask'],
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
				displayName: 'Manager User ID',
				name: 'users_id',
				type: 'number',
				default: 0,
				displayOptions: {
					show: {
						itemtype: ['ProjectTask'],
					},
				},
				description: 'ID of the manager user',
			},
			{
				displayName: 'Milestone',
				name: 'is_milestone',
				type: 'boolean',
				default: false,
				displayOptions: {
					show: {
						itemtype: ['ProjectTask'],
					},
				},
				description: 'Whether this task is a milestone',
			},
			{
				displayName: 'Number of Items Displayed',
				name: 'max_items',
				type: 'number',
				default: 20,
				displayOptions: {
					show: {
						itemtype: ['RSSFeed'],
					},
				},
				description: 'Maximum number of items to display',
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
				displayName: 'Priority',
				name: 'priority',
				type: 'number',
				default: 3,
				displayOptions: {
					show: {
						itemtype: ['ProjectTask'],
					},
				},

			},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				placeholder: 'is_deleted=0&as_map=0&browse=0...',
				displayOptions: {
					show: {
						itemtype: ['SavedSearch'],
					},
				},
				description: 'Query string for the search',
			},
			{
				displayName: 'Refresh Rate (Seconds)',
				name: 'refresh_rate',
				type: 'number',
				default: 86400,
				displayOptions: {
					show: {
						itemtype: ['RSSFeed'],
					},
				},
				description: 'Refresh rate in seconds',
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
				displayName: 'State ID',
				name: 'projectstates_id',
				type: 'number',
				default: 0,
				displayOptions: {
					show: {
						itemtype: ['ProjectTask'],
					},
				},
				description: 'ID of the project state',
			},
			{
				displayName: 'Status',
				name: 'state',
				type: 'options',
				options: [
					{ name: 'Information', value: 0 },
					{ name: 'To Do', value: 1 },
					{ name: 'Done', value: 2 },
				],
				default: 1,
				displayOptions: {
					show: {
						itemtype: ['Reminder'],
					},
				},
				description: 'Status of the reminder',
			},
			{
				displayName: 'Sub-Entities',
				name: 'is_recursive',
				type: 'boolean',
				default: false,
				displayOptions: {
					show: {
						itemtype: ['SavedSearch'],
					},
				},
				description: 'Whether to include sub-entities',
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
			{
				displayName: 'Type ID',
				name: 'projecttasktypes_id',
				type: 'number',
				default: 0,
				displayOptions: {
					show: {
						itemtype: ['ProjectTask'],
					},
				},
				description: 'ID of the project task type',
			},
		],
	},
];
