# 📌 Desafio Back-End — API de Usuários

Este projeto implementa uma **API REST de leitura de usuários** usando [AdonisJS v6](https://adonisjs.com/), com base em um arquivo de mock (`mock-users.json`).  
A API suporta **paginação, filtros, busca, ordenação e consulta por ID**.

---

## ⚙️ Requisitos

- [Node.js v22+](https://nodejs.org/)  
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## ▶️ Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/antoniosampaio12/valcann-api-desafio.git

   cd valcann-api-desafio/api

   npm install

   npm run dev

   abra outro terminal e execute os curl:

   exemplos:
   curl "http://127.0.0.1:3333/users?q=bruno"
   curl "http://127.0.0.1:3333/users?page=1&page_size=20"
   curl "http://127.0.0.1:3333/users?role=manager"
   curl "http://127.0.0.1:3333/users?is_active=true"
   curl "http://127.0.0.1:3333/users/1"
```





