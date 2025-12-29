# 📋 TODO: Campos Pré-definidos por Operação

## 🎯 Objetivo
Substituir o campo genérico "Payload (JSON)" por campos pré-definidos específicos para cada operação, permitindo:
- ✅ Digitar valores diretamente
- ✅ Usar expressões n8n
- ✅ Escolher valores de listas (dropdowns)

## 📝 Operações a Implementar

### 1. **Get Item(s)** - Já tem campos básicos
- Item Type ✅
- Item ID ✅ (opcional para listar todos)

### 2. **Add Item** - Precisa campos específicos
- Item Type ✅
- Campos dinâmicos baseados no Item Type:
  - **Ticket**: name, content, priority, urgency, status, etc.
  - **Change**: name, content, priority, impact, status, etc.
  - **Problem**: name, content, priority, impact, status, etc.
  - **Computer**: name, serial, otherserial, etc.
  - **Software**: name, manufacturer, etc.

### 3. **Update Item** - Precisa campos específicos
- Item Type ✅
- Item ID ✅
- Campos dinâmicos (mesmos do Add, mas para atualização)

### 4. **Add Comment** - Já tem campos básicos
- Item Type ✅
- Item ID ✅
- Comment ✅
- Private Comment ✅

## 🔧 Estratégia de Implementação

1. Criar arquivos separados por operação (similar ao GithubIssues)
2. Usar `displayOptions` para mostrar campos baseados no Item Type
3. Usar `options` para campos com lista de valores
4. Usar `type: 'string'` para campos de texto com suporte a expressões
5. Usar `type: 'number'` para campos numéricos
6. Usar `type: 'boolean'` para campos booleanos

## 📁 Estrutura de Arquivos Sugerida

```
nodes/GlpiApi/
├── GlpiApi.node.ts (principal)
├── resources/
│   ├── ticket/
│   │   ├── add.ts
│   │   ├── update.ts
│   │   └── index.ts
│   ├── change/
│   │   ├── add.ts
│   │   ├── update.ts
│   │   └── index.ts
│   └── ...
└── shared/
    └── itemTypes.ts (definições de tipos)
```

## 🎨 Exemplo de Campo

```typescript
{
  displayName: 'Priority',
  name: 'priority',
  type: 'options',
  options: [
    { name: 'Very Low', value: 1 },
    { name: 'Low', value: 2 },
    { name: 'Medium', value: 3 },
    { name: 'High', value: 4 },
    { name: 'Very High', value: 5 },
  ],
  default: 3,
  displayOptions: {
    show: {
      operation: ['add', 'update'],
      itemtype: ['Ticket', 'Change', 'Problem'],
    },
  },
}
```

## 📌 Notas
- Manter compatibilidade com versão atual
- Campos devem suportar expressões n8n automaticamente
- Validar campos obrigatórios por Item Type
- Considerar campos condicionais (ex: mostrar campo X apenas se campo Y tem valor Z)


