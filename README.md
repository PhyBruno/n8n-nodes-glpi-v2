# n8n-nodes-glpi

This is an n8n community node to interact with the **GLPI REST API**. It is compatible with GLPI 9.x and above.

## 🚀 Features

- **Full Session Management**: Automatically handles `initSession` and passes the `Session-Token` header to all subsequent requests.
- **Modular Resource Support**: Covers a wide range of GLPI resources including Assets, Assistance (Tickets), Administration, and Management.
- **Flexible Operations**: Supports `Get`, `Create`, and `Update` for most resources, plus specialized operations like `Comment` for Assistance items.

## 📦 Installation

To use this node in your n8n instance:

1.  Go to **Settings > Community Nodes**.
2.  Select **Install**.
3.  Enter the package name: `@justbrunasso/n8n-nodes-glpi` (or the git repository URL if installing privately).

## 🔑 Credentials

To configure the node, you need to create a **GLPI API** credential in n8n with the following fields:

- **Host**: Your GLPI URL (e.g., `https://your-glpi-instance.com/`). The node will automatically append `/apirest.php` if missing.
- **App-Token**: The Application Token generated in GLPI (Setup > General > API).
- **Username**: Your GLPI username.
- **Password**: Your GLPI password.

## 🛠️ Resources and Operations

This node supports the following resources and item types:

### 1. Assistance Management (ITIL)

Manage your helpdesk work items.

- **Item Types**: `Ticket`, `Change`, `Problem`
- **Operations**:
  - `Get`: Retrieve a single item by ID.
  - `Create`: Create a new item (JSON payload).
  - `Update`: Update an existing item by ID (JSON payload).
  - `Comment`: Add a text comment (Followup) to an item.

### 2. Asset Management

Manage hardware and software assets.

- **Item Types**: `Cable`, `Camera`, `Cartridge`, `Computer`, `Consumable`, `Enclosure`, `Monitor`, `Network Equipment`, `Passive Device`, `PDU`, `Peripheral`, `Phone`, `Printer`, `Rack`, `SIM Card`, `Software`, `Unmanaged Device`.
- **Operations**:
  - `Get`
  - `Create`
  - `Update`

### 3. Management

Manage administrative and financial business objects.

- **Item Types**: `Appliance`, `Budget`, `Certificate`, `Contact`, `Contract`, `Datacenter`, `DC Room`, `Document`, `Domain`, `Line`, `Location`, `Software License`, `Supplier`.
- **Operations**:
  - `Get`
  - `Create`
  - `Update`

### 4. Administration Management

Manage GLPI users and permissions.

- **Targets**:
  - `User`
  - `Group`
  - `Profile`
- **Operations**:
  - `Get`
  - `Create`
  - `Update`

### 5. Setup Management

Manage system configurations and auxiliary data.

- **Item Types**: `Authorization Assignment`, `Calendar`, `Dropdown`, `Notification`, `SLA`.
- **Operations**:
  - `Get`
  - `Create`
  - `Update`

### 6. Tool Management

Manage project tools and miscellaneous public items.

- **Item Types**: `Project`, `Project Task`, `Reminder (Public)`, `RSS Feed (Public)`, `Knowledge Base Item`, `Saved Search`.
- **Operations**:
  - `Get`
  - `Create`
  - `Update`

## 📝 Usage

For `Create` and `Update` operations, the **Payload** field expects a standard JSON object mapping the GLPI API fields for the specific item type.

**Example Payload for creating a Ticket:**

```json
{
	"name": "Printer stuck",
	"content": "The printer on the 2nd floor is jamming.",
	"status": 2,
	"urgency": 3
}
```

## 📄 License

MIT
