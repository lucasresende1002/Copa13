🏆 Copa 13 – Aplicativo de Campeonato de Futebol

Aplicativo mobile desenvolvido com Expo + React Native para gerenciamento de um campeonato de futebol misto com 12 times, contemplando fase de grupos, repescagem e mata-mata ida e volta, com perfis de acesso distintos para Administrador e Jogadores.

📱 Visão Geral

O Copa 13 é um aplicativo mobile que permite:

Gerenciar campeonatos de futebol

Separar acessos por tipo de usuário (Admin / Jogador)

Controlar fases do campeonato de forma estruturada

Evoluir facilmente para integração com backend e banco de dados

⚽ Formato do Campeonato
🔹 Fase de Grupos

12 times participantes

Classificação:

🥇 1º ao 6º → classificados direto

🥈 7º ao 10º → repescagem

❌ 11º e 12º → eliminados

🔹 Repescagem

Jogos eliminatórios entre:

7º × 10º

8º × 9º

🔹 Mata-mata

Sistema ida e volta

Avança quem tiver melhor saldo agregado

👥 Perfis de Usuário
🔑 Administrador

Gerenciar campeonato

Criar e editar jogos

Controlar fases e classificação

⚽ Jogador

Visualizar jogos

Acompanhar resultados

Ver tabela e classificação

🧱 Arquitetura do Projeto
app/
 ├── index.tsx              # Redirecionamento inicial
 │
 ├── (auth)/                # Rotas públicas
 │    └── login.tsx
 │
 ├── (tabs)/                # Navegação principal (futuro)
 │    ├── _layout.tsx
 │    └── index.tsx
 │
 ├── admin/
 │    └── index.tsx         # Área do administrador
 │
 ├── player/
 │    └── index.tsx         # Área do jogador
 │
 └── context/
      └── AuthContext.tsx   # Contexto de autenticação

🛠️ Tecnologias Utilizadas

React Native

Expo

Expo Router

TypeScript

Context API

Expo Secure Store (planejado)

Axios (planejado)

🚀 Como Executar o Projeto
Pré-requisitos

Node.js (LTS)

Expo CLI

Emulador Android/iOS ou app Expo Go

Passos
# Instalar dependências
npm install

# Iniciar o projeto
npm start


Depois:

Escaneie o QR Code com o Expo Go

Ou execute no emulador

🔐 Login de Teste
Tipo	Email
Administrador	admin@admin.com
Jogador	qualquer outro email
📌 Status do Projeto

🚧 Em desenvolvimento

Funcionalidades já implementadas:

 Estrutura base do app

 Sistema de login por perfil

 Rotas separadas por tipo de usuário

 Contexto de autenticação

Próximas funcionalidades:

 Proteção de rotas

 Persistência de login

 Backend com autenticação JWT

 Cadastro de times e jogadores

 Tabela de classificação

 Lançamento de resultados

 Histórico de partidas

📈 Evolução Planejada

Backend com FastAPI

Banco de dados PostgreSQL

API REST com autenticação JWT

Dashboard administrativo

Push notifications

Publicação na Play Store

👨‍💻 Autor

Lucas Resende
Desenvolvedor | Analista de Dados

📄 Licença

Este projeto está sob a licença MIT.
Sinta-se livre para usar, estudar e evoluir 🚀