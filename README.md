
# 📚 Catálogo de Livros

Um projeto Fullstack desenvolvido com **Angular**, **Node.js**, **Express** e **MongoDB**, que permite cadastrar, listar, editar, excluir e filtrar livros. A interface é moderna, responsiva e conta com tema escuro, utilizando **TailwindCSS** no Frontend.

## 🚀 Funcionalidades

- ✅ Adicionar livros (nome, autor, ano e gênero)
- ✅ Editar livros
- ✅ Remover livros
- ✅ Listar todos os livros
- ✅ Filtro/pesquisa por nome ou autor
- ✅ Interface responsiva (Mobile / Desktop)
- ✅ Suporte a tema escuro (Dark Mode)

## 🛠️ Tecnologias Utilizadas

- **Frontend:** Angular v19 + TailwindCSS
- **Backend:** Node.js + Express
- **Banco de Dados:** MongoDB

# 🖥️ Como rodar o projeto localmente

## 🔸 Pré-requisitos

- [Node.js](https://nodejs.org) instalado (versão LTS recomendada)
- [Angular CLI](https://angular.io/cli) instalado globalmente
- [MongoDB](https://www.mongodb.com/) instalado e rodando localmente ou na nuvem (Ex.: MongoDB Atlas)

## 🚩 Rodando o Backend

### 🔸 Instalar dependências:

```bash
cd backend
npm install
```

### 🔸 Rodar o servidor:

```bash
npm start
```

O backend irá rodar em:  
➡️ http://localhost:3000

## 🚩 Rodando o Frontend (Angular)

### 🔸 Instalar dependências:

```bash
cd catalogo-livros
npm install
```

### 🔸 Rodar o servidor Angular:

```bash
ng serve
```

A aplicação estará disponível em:  
➡️ http://localhost:4200

## ⚙️ Configuração do Banco de Dados (MongoDB)

- Por padrão, o backend conecta-se ao MongoDB local na URL:

```
mongodb://127.0.0.1:27017/catalogo-livros
```

Se desejar usar o MongoDB Atlas ou outro servidor, altere a string de conexão no arquivo:

```javascript
// backend/server.js
mongoose.connect('mongodb://127.0.0.1:27017/catalogo-livros');
```

## 🗂️ Estrutura de Pastas

```
📦 catalogo-livros
├── 📁 backend
│   ├── models
│   ├── node_modules
│   ├── server.js
│   └── package.json
├── 📁 frontend
│   ├── src
│   ├── angular.json
│   └── package.json
└── README.md
```

## 🎨 Layout e UI

- 🔥 Interface feita com TailwindCSS
- 💡 Design limpo, moderno e responsivo
- 🌙 Suporte a Dark Mode

## 🤝 Contribuição

Sinta-se livre para abrir issues, sugerir melhorias ou enviar pull requests. ✨

