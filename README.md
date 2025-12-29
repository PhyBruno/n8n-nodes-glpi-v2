# n8n-nodes-glpi

This is an n8n community node to interact with the **GLPI REST API**. It is compatible with GLPI 9.x and above.

## 🚀 Features

- **Full Session Management**: Automatically handles `initSession` and passes the `Session-Token` header to all subsequent requests.
- **Modular Resource Support**: Covers a wide range of GLPI resources including Assets, Assistance (Tickets), Administration, and Management.
- **Flexible Operations**: Supports `Get`, `Create`, and `Update` for most resources, plus specialized operations like `Comment` for Assistance items.

## 📦 Installation

1.  Go to **Settings > Community Nodes**.
2.  Select **Install**.
3.  Enter the package name: `@justbrunasso/n8n-nodes-glpi`.

## 🔑 Credentials

Create a **GLPI API** credential in n8n with:

- **Host**: Your GLPI URL (e.g., `https://your-glpi-instance.com/`).
- **App-Token**: Generated in GLPI (Setup > General > API).
- **Username**: Your GLPI username.
- **Password**: Your GLPI password.

## 🛠️ Resources and Operations

### 1. Assistance Management (ITIL)

- **Item Types**: `Ticket`, `Change`, `Problem`
- **Operations**: `Get`, `Create`, `Update`, `Comment` (Add Followup), `Delete` (Purge/Trash), `Solve` (Add Solution).

### 2. Asset Management

- **Item Types**: `Cable`, `Camera`, `Cartridge`, `Computer`, `Consumable`, `Enclosure`, `Monitor`, `Network Equipment`, `Passive Device`, `PDU`, `Peripheral`, `Phone`, `Printer`, `Rack`, `SIM Card`, `Software`, `Unmanaged Device`.
- **Operations**: `Get`, `Delete` (Purge/Trash).

### 3. Management

- **Item Types**: `Appliance`, `Budget`, `Certificate`, `Contact`, `Contract`, `Datacenter`, `DC Room`, `Document`, `Domain`, `Line`, `Location`, `Software License`, `Supplier`.
- **Operations**: `Get`, `Delete`.

### 4. Administration Management

- **Targets**: `User`, `Group`, `Profile`.
- **Operations**:
  - **User**: `Get`, `Create`, `Update`, `Delete`.
  - **Group**: `Get`, `Create`, `Update`, `Delete`.
  - **Profile**: `Get`, `Update` (Limited).

### 5. Setup Management

- **Item Types**: `Authorization Assignment`, `Calendar`, `Dropdown`, `Notification`, `SLA`.
- **Operations**: `Get`, `Create`, `Update`, `Delete`.

### 6. Tool Management

- **Item Types**:
  - `Project`, `Project Task`
  - `Reminder (Public)`, `RSS Feed (Public)`, `Saved Search`
  - `Knowledge Base Item`
- **Operations**: `Get`, `Create`, `Update`, `Delete`.

### 7. Other Actions

- **Custom API Call**: Perform any raw API request (GET, POST, PUT, DELETE) to any GLPI endpoint.

## 🚫 Out of Scope / Limitations

The following features or operations are currently **not implemented** or **disabled** in this version:

- **Administration Management**:
  - **Profile**: `Create` operation is not fully supported or implementation is pending.
- **Asset Management**:
  - `Update` and `Create` operations are not implemented.
- **Management**:
  - `Update` and `Create` operations are not implemented.
- **General**:
  - Some specific fields for `Update` operations across various resources might not be exposed in the UI yet (use "Custom API Call" or "Raw Inputs" if available/needed).

## 📞 Contact

**PhyBruno**

- **Phone/WhatsApp**: 47 992238670

## 📄 License

MIT
