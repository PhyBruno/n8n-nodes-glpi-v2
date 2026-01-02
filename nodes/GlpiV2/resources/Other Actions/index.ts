import type { INodeProperties } from 'n8n-workflow';
import { otherActionsCustomApiCallDescription } from './customApiCall';

const showOnlyForOtherActions = {
	resource: ['Other Actions'],
};

export const otherActionsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForOtherActions,
		},
		options: [
			{
				name: 'Make a Custom API Call',
				value: 'customApiCall',
				action: 'Make a custom API call',
				description: 'Make a custom API call with full control',
			},
		],
		default: 'customApiCall',
	},
	...otherActionsCustomApiCallDescription,
];
