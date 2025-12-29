import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAdministrationManagementUpdate = {
	resource: ['Administration Management'],
};

export const administrationManagementUpdateDescription: INodeProperties[] = [
	{
		displayName: 'User ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['update'],
			},
		},
		default: 0,
		required: true,
		description: 'ID of the user to update',
	},
	{
		displayName: 'Group ID',
		name: 'itemId',
		type: 'number',
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['updateGroup'],
			},
		},
		default: 0,
		required: true,
		description: 'ID of the group to update',
	},
	{
		displayName: 'PUT /apirest.php/User/{ItemID}',
		name: 'administrationManagementUpdateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['update', 'updateGroup'],
			},
		},
		description: 'Update an existing user',
	},
	// Update User Fields
	{
		displayName: 'Login',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['update'],
			},
		},
		description: 'Login of the user',
	},
	{
		displayName: 'First Name',
		name: 'firstname',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['update'],
			},
		},
		description: 'First name of the user',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		default: '',
		placeholder: 'name@email.com',
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['update'],
			},
		},
		description: 'Email of the user (will be added to User Emails)',
	},
	{
		displayName: 'Active',
		name: 'is_active',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['update'],
			},
		},
		description: 'Whether the user is active',
	},
	{
		displayName: 'Default Entity ID',
		name: 'entities_id',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['update'],
			},
		},
		description: 'ID of the default entity',
	},
	{
		displayName: 'Send Email for Password',
		name: 'email_password',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['update'],
			},
		},
		description: 'Whether to send an email to the user to set their password. If false, you must provide a password.',
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: {
			password: true,
		},
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['update'],
				email_password: [false],
			},
		},
		default: '',
		description: 'Password for the user',
	},
	{
		displayName: 'Confirm Password',
		name: 'password_confirmation',
		type: 'string',
		typeOptions: {
			password: true,
		},
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['update'],
				email_password: [false],
			},
		},
		default: '',
		description: 'Confirm the password',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Cell Phone',
				name: 'mobile',
				type: 'string',
				default: '',
				description: 'Cell phone number',
			},
			{
				displayName: 'Last Name',
				name: 'realname',
				type: 'string',
				default: '',
				description: 'Last name of the user',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Phone number',
			},
			{
				displayName: 'Profile ID',
				name: 'profiles_id',
				type: 'number',
				default: 0,
				description: 'ID of the profile',
			},
			{
				displayName: 'Recursive',
				name: 'is_recursive',
				type: 'boolean',
				default: false,
				description: 'Whether the user is recursive',
			},
		],
	},
	// Update Group Fields
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['updateGroup'],
			},
		},
		description: 'Name of the group',
	},
	{
		displayName: 'Requester',
		name: 'is_requester',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['updateGroup'],
			},
		},
		description: 'Whether the group can be a requester',
	},
	{
		displayName: 'Observer',
		name: 'is_watcher',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['updateGroup'],
			},
		},
		description: 'Whether the group can be an observer',
	},
	{
		displayName: 'Can Be Notified',
		name: 'is_notify',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['updateGroup'],
			},
		},
		description: 'Whether the group can be notified',
	},
	{
		displayName: 'Can Contain Users',
		name: 'is_usergroup',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['updateGroup'],
			},
		},
		description: 'Whether the group can contain users',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				...showOnlyForAdministrationManagementUpdate,
				operation: ['updateGroup'],
			},
		},
		options: [
			{
				displayName: 'As Child Of (ID)',
				name: 'groups_id',
				type: 'number',
				default: 0,
				description: 'ID of the parent group',
			},
			{
				displayName: 'Assigned To',
				name: 'is_assign',
				type: 'boolean',
				default: false,
				description: 'Whether the group can be assigned to',
			},
			{
				displayName: 'Can Be Manager',
				name: 'is_manager',
				type: 'boolean',
				default: false,
				description: 'Whether the group can be a manager',
			},
			{
				displayName: 'Code',
				name: 'code',
				type: 'string',
				default: '',
				description: 'Code of the group',
			},
			{
				displayName: 'Comments',
				name: 'comment',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Recursive Membership',
				name: 'recursive_membership',
				type: 'boolean',
				default: false,
				description: 'Whether the group membership is recursive',
			},
			{
				displayName: 'Task',
				name: 'is_task',
				type: 'boolean',
				default: false,
				description: 'Whether the group can be a task',
			},
		],
	},
];

