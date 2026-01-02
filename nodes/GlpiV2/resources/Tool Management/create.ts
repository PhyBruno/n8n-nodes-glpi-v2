import type { INodeProperties } from 'n8n-workflow';

export const toolManagementCreateDescription: INodeProperties[] = [
	{
		displayName: 'POST /apirest.php/{ItemType}',
		name: 'toolManagementCreateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['Tool Management'],
				operation: ['create'],
			},
		},
		description: 'Create a new item',
	},
	// Knowledge Base Item Fields
	{
		displayName: 'Subject',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['Tool Management'],
				operation: ['create'],
				itemtype: ['KnowbaseItem'],
			},
		},
		description: 'Subject of the knowledge base item',
	},
	{
		displayName: 'Content',
		name: 'answer',
		type: 'string',
		default: '',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: ['Tool Management'],
				operation: ['create'],
				itemtype: ['KnowbaseItem'],
			},
		},
		description: 'Content of the knowledge base item',
	},
	{
		displayName: 'Knowledgebase Category ID',
		name: 'knowbaseitems_categories_id',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: ['Tool Management'],
				operation: ['create'],
				itemtype: ['KnowbaseItem'],
			},
		},
		description: 'ID of the knowledge base category',
	},
	{
		displayName: 'Put This Item in the FAQ',
		name: 'is_faq',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['Tool Management'],
				operation: ['create'],
				itemtype: ['KnowbaseItem'],
			},
		},
		description: 'Whether to include this item in the FAQ',
	},
];
