import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAdministrationManagementCreate = {
	operation: ['create'],
	resource: ['Administration Management'],
};

export const administrationManagementCreateDescription: INodeProperties[] = [
	{
		displayName: 'POST /apirest.php/{ItemType}',
		name: 'administrationManagementCreateNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForAdministrationManagementCreate,
		},
		description: 'Create a new user',
	},
	{
		displayName: 'Login',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForAdministrationManagementCreate,
		},
		description: 'Login of the user',
	},
	{
		displayName: 'First Name',
		name: 'firstname',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForAdministrationManagementCreate,
		},
		description: 'First name of the user',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'name@email.com',
		displayOptions: {
			show: showOnlyForAdministrationManagementCreate,
		},
		description: 'Email of the user (will be added to User Emails)',
	},
	{
		displayName: 'Active',
		name: 'is_active',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: showOnlyForAdministrationManagementCreate,
		},
		description: 'Whether the user is active',
	},
	{
		displayName: 'Default Entity ID',
		name: 'entities_id',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnlyForAdministrationManagementCreate,
		},
		description: 'ID of the default entity',
	},
	{
		displayName: 'Send Email for Password',
		name: 'email_password',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: showOnlyForAdministrationManagementCreate,
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
				...showOnlyForAdministrationManagementCreate,
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
				...showOnlyForAdministrationManagementCreate,
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
			show: showOnlyForAdministrationManagementCreate,
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
	// Future UI fields will be added here
];
