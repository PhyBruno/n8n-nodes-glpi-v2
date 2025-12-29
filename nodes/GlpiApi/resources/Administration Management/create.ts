import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAdministrationManagementCreate = {
	operation: ['create'],
	resource: ['Administration Management'],
};

const showOnlyForAdministrationManagementCreateGroup = {
	operation: ['createGroup'],
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
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForAdministrationManagementCreateGroup,
		},
		description: 'Name of the group',
	},
	{
		displayName: 'Requester',
		name: 'is_requester',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: showOnlyForAdministrationManagementCreateGroup,
		},
		description: 'Whether the group can be a requester',
	},
	{
		displayName: 'Observer',
		name: 'is_watcher',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: showOnlyForAdministrationManagementCreateGroup,
		},
		description: 'Whether the group can be an observer',
	},
	{
		displayName: 'Can Be Notified',
		name: 'is_notify',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: showOnlyForAdministrationManagementCreateGroup,
		},
		description: 'Whether the group can be notified',
	},
	{
		displayName: 'Can Contain Users',
		name: 'is_usergroup',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: showOnlyForAdministrationManagementCreateGroup,
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
			show: showOnlyForAdministrationManagementCreateGroup,
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
	{
		displayName: 'POST /apirest.php/Group',
		name: 'administrationManagementCreateGroupNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForAdministrationManagementCreateGroup,
		},
		description: 'Create a new group',
	},
];
