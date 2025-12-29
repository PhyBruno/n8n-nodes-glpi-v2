# 🔐 Auto Init Session — GLPI Authentication (Obrigatório)

## 🎯 Objetivo

Eliminar a necessidade do usuário:

* Criar manualmente um node HTTP para `initSession`
* Armazenar `Session-Token` em variáveis
* Gerenciar expiração de sessão

O **Session-Token passa a ser gerado automaticamente** sempre que o node executar.

---

## 🧠 Estratégia Técnica

1. Credencial armazena:

   * GLPI URL
   * App-Token
   * Username
   * Password
2. O node:

   * Executa `GET /initSession`
   * Armazena o `session_token` em memória
   * Reutiliza o token em todas as chamadas subsequentes
3. Se a sessão expirar:

   * O node recria automaticamente

---

## 6️⃣ Arquivo de Credenciais (ATUALIZADO)

### 💼 `GlpiApi.credentials.ts`

```ts
import { ICredentialType } from 'n8n-workflow';

export class GlpiApi implements ICredentialType {
  name = 'glpiApi';
  displayName = 'GLPI API';
  documentationUrl = 'https://atendimento.centrium.com.br/apirest.php';

  properties = [
    {
      displayName: 'GLPI URL',
      name: 'host',
      type: 'string',
      default: '',
      placeholder: 'https://glpi.exemplo.com/apirest.php',
      required: true,
    },
    {
      displayName: 'App Token',
      name: 'appToken',
      type: 'string',
      typeOptions: { password: true },
      required: true,
      default: '',
    },
    {
      displayName: 'Username',
      name: 'username',
      type: 'string',
      required: true,
      default: '',
    },
    {
      displayName: 'Password',
      name: 'password',
      type: 'string',
      typeOptions: { password: true },
      required: true,
      default: '',
    },
  ];
}
```

✅ **Session-Token removido da credencial**
✅ **Compatível com Basic Auth do GLPI**

---

---

## 7️⃣ Node Principal (ATUALIZADO)

### 📌 `GlpiApi.node.ts` (com Auto Session)

```ts
import {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes, NodeOperationError } from 'n8n-workflow';

// 🔐 Função utilitária para inicializar sessão
async function initSession(
  this: IExecuteFunctions,
  baseUrl: string,
  appToken: string,
  username: string,
  password: string,
): Promise<string> {
  const response = await this.helpers.httpRequest({
    method: 'GET',
    url: `${baseUrl}/initSession`,
    headers: {
      'App-Token': appToken,
    },
    auth: {
      username,
      password,
    },
    json: true,
  });

  if (!response?.session_token) {
    throw new Error('Failed to init GLPI session');
  }

  return response.session_token;
}

export class GlpiApi implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'GLPI API',
    name: 'glpiApi',
    icon: 'file:glpi.svg',
    group: ['transform'],
    version: 1,
    description: 'GLPI REST API',
    defaults: {
      name: 'GLPI API',
    },
    inputs: [NodeConnectionTypes.Main],
    outputs: [NodeConnectionTypes.Main],
    credentials: [{ name: 'glpiApi', required: true }],
    properties: [
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        options: [
          { name: 'Get Item(s)', value: 'get' },
          { name: 'Add Item', value: 'add' },
          { name: 'Update Item', value: 'update' },
          { name: 'Add Comment', value: 'comment' },
        ],
        default: 'get',
      },

      {
        displayName: 'Item Type',
        name: 'itemtype',
        type: 'options',
        options: [
          { name: 'Ticket', value: 'Ticket' },
          { name: 'Change', value: 'Change' },
          { name: 'Problem', value: 'Problem' },
          { name: 'Computer', value: 'Computer' },
          { name: 'Software', value: 'Software' },
        ],
        default: 'Ticket',
        required: true,
      },

      {
        displayName: 'Item ID',
        name: 'itemId',
        type: 'number',
        displayOptions: {
          show: { operation: ['get', 'update', 'comment'] },
        },
      },

      {
        displayName: 'Payload (JSON)',
        name: 'payload',
        type: 'json',
        default: '{}',
        displayOptions: {
          show: { operation: ['add', 'update'] },
        },
      },

      {
        displayName: 'Comment',
        name: 'comment',
        type: 'string',
        displayOptions: {
          show: { operation: ['comment'] },
        },
      },

      {
        displayName: 'Private Comment',
        name: 'isPrivate',
        type: 'boolean',
        default: false,
        displayOptions: {
          show: { operation: ['comment'] },
        },
      },
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];

    const creds = await this.getCredentials('glpiApi');
    const baseUrl = creds.host as string;

    // 🔐 Auto init session (uma vez por execução)
    const sessionToken = await initSession.call(
      this,
      baseUrl,
      creds.appToken as string,
      creds.username as string,
      creds.password as string,
    );

    const headers = {
      'App-Token': creds.appToken as string,
      'Session-Token': sessionToken,
      'Content-Type': 'application/json',
    };

    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
      try {
        const operation = this.getNodeParameter('operation', itemIndex);
        const itemtype = this.getNodeParameter('itemtype', itemIndex) as string;

        const options: any = { headers, json: true };

        if (operation === 'get') {
          const id = this.getNodeParameter('itemId', itemIndex, '') as string;
          options.method = 'GET';
          options.url = `${baseUrl}/${itemtype}${id ? '/' + id : ''}`;
        }

        if (operation === 'add') {
          options.method = 'POST';
          options.url = `${baseUrl}/${itemtype}`;
          const payload = this.getNodeParameter('payload', itemIndex);
          options.body = { input: typeof payload === 'string' ? JSON.parse(payload) : payload };
        }

        if (operation === 'update') {
          const id = this.getNodeParameter('itemId', itemIndex);
          options.method = 'PUT';
          options.url = `${baseUrl}/${itemtype}/${id}`;
          const payload = this.getNodeParameter('payload', itemIndex);
          options.body = { input: typeof payload === 'string' ? JSON.parse(payload) : payload };
        }

        if (operation === 'comment') {
          options.method = 'POST';
          options.url = `${baseUrl}/ITILFollowup`;
          options.body = {
            input: {
              items_id: this.getNodeParameter('itemId', itemIndex),
              itemtype,
              content: this.getNodeParameter('comment', itemIndex),
              is_private: this.getNodeParameter('isPrivate', itemIndex) ? 1 : 0,
            },
          };
        }

        const response = await this.helpers.httpRequest(options);
        returnData.push({
          json: response,
          pairedItem: { item: itemIndex },
        });
      } catch (error) {
        if (this.continueOnFail()) {
          returnData.push({
            json: { error: error.message },
            pairedItem: { item: itemIndex },
          });
        } else {
          throw new NodeOperationError(this.getNode(), error, {
            itemIndex,
          });
        }
      }
    }

    return [returnData];
  }
}
```

---

## 🧠 Benefícios dessa abordagem

✅ UX perfeita (usuário só informa credencial uma vez)
✅ Sem variáveis externas
✅ Session-Token sempre válido
✅ Totalmente compatível com n8n Cloud e Self-hosted
✅ Padrão profissional de community nodes

---

## 🔜 Próximos upgrades naturais

Se quiser, o próximo passo ideal é:

1. ♻️ Cache de Session-Token (evitar initSession a cada execução)
2. 🧹 Auto `killSession`
3. 🧠 Campos dinâmicos por itemtype
4. 🛡 Validação inteligente de payload
5. 🗑 Delete item
