import type { INodeProperties } from 'n8n-workflow';

const showOnlyForManagementGet = {
	operation: ['get'],
	resource: ['Management'],
};

export const managementGetDescription: INodeProperties[] = [
    {
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: showOnlyForManagementGet,
		},
		default: 0,
		description: 'ID of the administration item to retrieve. Leave empty to get all items of the selected type.',
	},
    {
		displayName: 'GET /apirest.php/{ItemType}/{ItemID}',
		name: 'administrationManagementGetNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForManagementGet,
		},
		description: 'Get the data of a single administration item. The ItemType Can be: User, Group and Profile.',
	},
];

