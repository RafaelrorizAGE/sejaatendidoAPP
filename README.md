# 🏥 Seja Atendido - Backend
API REST para o aplicativo Seja Atendido.
## 🛠️Tecnologias
- Node.js
- Express
- PostgreSQL
- Prisma ORM
- JWT (autenticação)
## 📋 Pré-requisitos
- Node.js &gt;= 18.x
- PostgreSQL &gt;= 14.x
- npm ou yarn
## 🚀 Instalação
# Clonar repositório
git clone https://github.com/seu-usuario/sejaatendido-backend.git
# Instalar dependências
npm install
# Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com suas configurações
# Executar migrações
npx prisma migrate dev
# Iniciar servidor
[ ] Salvar o arquivo
1.1.6 Criar README.md do Backend (8 min)
[ ] Criar arquivo README.md na raiz do projeto
[ ] Adicionar conteúdo inicial:
npm run dev
## 📁 Estrutura do Projeto
src/
├── controllers/
├── routes/
├── middlewares/
├── services/
└── utils/
prisma/
└── schema.prisma
package.json
## 🌿 Branches
- main: produção (deploy automático)
- dev: desenvolvimento (código estável para testes)
- feature/*: novas funcionalidades
## 📝 Status
🚧 Em desenvolvimento
