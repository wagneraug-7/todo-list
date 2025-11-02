const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       
  password: '',       
  database: 'todolist'
});

db.connect(err => {
  if (err) {
    console.log('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

app.get('/', (req, res) => {
  res.send('Servidor da To-Do List está rodando!');
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "O título da tarefa é obrigatório" });
  }

  const query = "INSERT INTO tasks (title) VALUES (?)";
  db.query(query, [title], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, title });
  });
});

app.get('/tasks', (req, res) => {
  const query = "SELECT * FROM tasks";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const query = "UPDATE tasks SET title = ? WHERE id = ?";
  db.query(query, [title, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Tarefa atualizada com sucesso!" });
  });
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM tasks WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Tarefa deletada com sucesso!" });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});