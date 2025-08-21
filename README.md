# Seja Atendido - Sistema de Saúde

Um sistema completo de gestão médica para conectar pacientes e médicos, desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- **Autenticação de usuários** (Pacientes, Médicos, Administradores)
- **Agendamento de consultas**
- **Chat em tempo real** entre pacientes e médicos
- **Perfis de usuário** com informações médicas
- **Dashboard específico** para cada tipo de usuário
- **Sistema responsivo** para desktop e mobile

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Git

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone [seu-repositório]
cd seja-atendido
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

4. Acesse `http://localhost:5173` no seu navegador

## 🏗️ Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 📁 Estrutura do Projeto

```
src/
├── components/ui/     # Componentes de UI reutilizáveis
├── pages/            # Páginas da aplicação
├── assets/           # Imagens e recursos estáticos
├── hooks/            # Hooks customizados
├── lib/              # Utilitários
└── main.tsx          # Ponto de entrada
```

## 🚀 Deploy

### Vercel
1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente necessárias
3. Deploy automático a cada push

### Netlify
1. Conecte seu repositório à Netlify
2. Configure o comando de build: `npm run build`
3. Configure o diretório de publicação: `dist`

### Hospedagem própria
1. Execute `npm run build`
2. Sirva os arquivos da pasta `dist/` com um servidor web (nginx, apache, etc.)

## 🔧 Configuração do Backend

Para funcionalidade completa, você precisará configurar:

1. **Banco de dados** (PostgreSQL recomendado)
2. **Autenticação** (JWT ou sessões)
3. **WebSocket** para chat em tempo real
4. **APIs** para agendamentos e perfis

### Tabelas principais necessárias:
- `users` (pacientes, médicos, admins)
- `appointments` (consultas)
- `messages` (chat)
- `medical_records` (histórico médico)

## 🎨 Customização

O projeto utiliza Tailwind CSS com tokens de design customizados em `src/index.css`. Para alterar cores e estilos:

1. Modifique as variáveis CSS em `src/index.css`
2. Ajuste a configuração do Tailwind em `tailwind.config.ts`

## 📝 Tecnologias Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones
- **React Router** - Roteamento
- **Sonner** - Notificações
- **Vite** - Build tool

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas, abra uma issue no GitHub.

---

**Nota**: Este projeto foi inicialmente desenvolvido na plataforma Lovable e todas as dependências específicas da plataforma foram removidas para permitir deploy independente.
