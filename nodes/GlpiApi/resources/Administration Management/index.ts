import type { INodeProperties } from 'n8n-workflow';
import { administrationManagementGetDescription } from './get';
import { administrationManagementCreateDescription } from './create';
import { administrationManagementUpdateDescription } from './update';
import { administrationManagementGroupDescription } from './group';
import { administrationManagementProfileDescription } from './profile';
import { administrationManagementDeleteDescription } from './delete';
import { administrationManagementOptionsDescription } from './options';

const showOnlyForAdministrationManagement = {
	resource: ['Administration Management'],
};

export const administrationManagementDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAdministrationManagement,
		},
		options: [
			{
				name: 'Create a Group',
				value: 'createGroup',
				action: 'Create a new group',
				description: 'Create a new group',
			},
			{
				name: 'Create a Profile',
				value: 'createProfile',
				action: 'Create a new profile',
				description: 'Create a new profile',
			},
			{
				name: 'Create a User',
				value: 'create',
				action: 'Create a new user',
				description: 'Create a new user',
			},
			{
				name: 'Delete a Group',
				value: 'deleteGroup',
				action: 'Delete a group',
			},
			{
				name: 'Delete a Profile',
				value: 'deleteProfile',
				action: 'Delete a profile',
			},
			{
				name: 'Delete a User',
				value: 'deleteUser',
				action: 'Delete a user',
			},
			{
				name: 'Get a Group',
				value: 'getGroup',
				action: 'Get a group',
				description: 'Get the data of a single group',
			},
			{
				name: 'Get a Profile',
				value: 'getProfile',
				action: 'Get a profile',
				description: 'Get the data of a single profile',
			},
			{
				name: 'Get a User',
				value: 'get',
				action: 'Get a user',
				description: 'Get the data of a single user',
			},
			{
				name: 'Update a Group',
				value: 'updateGroup',
				action: 'Update a group',
				description: 'Update an existing group',
			},
			{
				name: 'Update a Profile',
				value: 'updateProfile',
				action: 'Update a profile',
				description: 'Update an existing profile',
			},
			{
				name: 'Update a User',
				value: 'update',
				action: 'Update a user',
				description: 'Update an existing user',
			},
		],
		default: 'get',
	},
	...administrationManagementGetDescription,
	...administrationManagementCreateDescription,
	...administrationManagementUpdateDescription,
	...administrationManagementGroupDescription,
	...administrationManagementProfileDescription,
	...administrationManagementDeleteDescription,
	...administrationManagementOptionsDescription,
];
