# Nexo - Back-end (API) 

API RESTful desenvolvida em Node.js para servir a aplicação móvel **Nexo**. Este serviço gerencia toda a lógica de negócios, rotas e a persistência dos dados dos produtos num banco de dados local.

> **🔗 Conectado ao Front-end:** [Acesse o Repositório Mobile aqui](https://github.com/BiancagscCabral/Desafio-03-ReactNative-Frontend)

## 🚀 Funcionalidades da API

O sistema fornece endpoints completos para o ciclo de vida (CRUD) dos produtos:

* `GET /products`: Lista todos os produtos (ordenados por data de criação).
* `GET /products/:id`: Busca os detalhes de um produto específico.
* `POST /products`: Cria um novo produto no banco de dados.
* `PUT /products/:id`: Atualiza os dados de um produto existente.
* `DELETE /products/:id`: Remove um produto permanentemente.

## 🛠️ Tecnologias Utilizadas

* **Node.js** (Ambiente de execução)
* **Express** (Framework web rápido e minimalista)
* **TypeScript** (Superconjunto de JS para tipagem)
* **Prisma ORM** (Ferramenta moderna para banco de dados)
* **SQLite** (Banco de dados leve e local)

## 📦 Como rodar o projeto

### Pré-requisitos
* Node.js instalado na máquina.

### Passo a passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/BiancagscCabral/Desafio03-ReactNative-Backend.git](https://github.com/BiancagscCabral/Desafio03-ReactNative-Backend.git)
    cd Desafio03-ReactNative-Backend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicialize o Banco de Dados:**
    Este comando cria o arquivo `dev.db` local e configura as tabelas automaticamente através do Prisma.
    ```bash
    npx prisma migrate dev --name init
    ```

4.  **Inicie o servidor:**
    ```bash
    npm run dev
    ```

5.  **Pronto!**
    O servidor estará rodando em: `http://localhost:3333` 🚀

---
Desenvolvido por **Bianca Guimarães**
