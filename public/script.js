const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');

const API_URL = 'http://localhost:3000/tasks';

// Função para carregar tarefas do servidor
async function loadTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();

  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.title;

    // Botão para deletar
    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.onclick = () => deleteTask(task.id);

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

// Função para adicionar nova tarefa
async function addTask() {
  const title = newTaskInput.value.trim();
  if (!title) return;

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });

  newTaskInput.value = '';
  loadTasks();
}

// Função para deletar tarefa
async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  loadTasks();
}

addTaskBtn.addEventListener('click', addTask);

// Carrega as tarefas ao abrir a página
loadTasks();
