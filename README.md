# To-Do List Node.js + MySQL

Projeto de To-Do List com backend em Node.js e MySQL, e front-end em HTML/CSS/JavaScript. Permite criar, listar e deletar tarefas diretamente no navegador.

Tecnologias utilizadas: Node.js, Express, MySQL, HTML, CSS, JavaScript, Git/GitHub.

Funcionalidades: adicionar tarefas, listar tarefas, deletar tarefas e front-end simples para interação com a API.

Estrutura do projeto:
- server.js: # servidor Node.js com rotas da API
- package.json: # dependências do Node
- .gitignore: # ignora node_modules e arquivos sensíveis
- public/: # front-end
  - index.html
  - style.css
  - script.js

Como rodar o projeto localmente: 
1) Clonar o repositório: `git clone https://github.com/wagneraug-7/todo-list`
2) Entrar na pasta: `cd todo-list`
3) Instalar dependências: `npm install express mysql2`
4) Criar banco e tabela MySQL: `CREATE DATABASE todolist; USE todolist; CREATE TABLE tasks (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255) NOT NULL);`
5) Rodar o servidor: `node server.js`
6) Abrir no navegador: `http://localhost:3000/`. Agora você poderá adicionar, listar e deletar tarefas.

Observações: certifique-se de que o MySQL está rodando antes de iniciar o servidor. A pasta `public` contém o front-end. Use `.gitignore` para não subir node_modules. O projeto pode ser expandido para editar tarefas, marcar como concluídas e adicionar autenticação.

Contato: Desenvolvido por Wagner Augusto. [Meu GitHub](https://github.com/wagneraug-7)