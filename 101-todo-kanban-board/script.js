const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveToStorage(tasks) {
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

function updateTask(id) {
  const task = tasks.find(task => task.id === id);

  switch(task.status) {
    case 'open':
      task.status = 'inprogress';
      break;
    case 'inprogress':
      task.status = 'completed';
      break;
    case 'completed':
      task.status = 'open';
      break;;
  }
  saveToStorage(tasks);

  renderTasks();
}

function createTaskElement(task) {
  const div = document.createElement('div');
  div.textContent = task.title;
  div.className = `task ${task.status}`;
  div.onclick = () => updateTask(task.id);
  return div;
}

function renderTasks() {
  document.getElementById('tasks-open').innerHTML = '';
  document.getElementById('tasks-inprogress').innerHTML = '';
  document.getElementById('tasks-completed').innerHTML = '';

  tasks.forEach(task => {
    const taskEl = createTaskElement(task);
    switch(task.status) {
      case 'open':
          document.getElementById('tasks-open').appendChild(taskEl);
          break;
      case 'inprogress':
          document.getElementById('tasks-inprogress').appendChild(taskEl);
          break;
      case 'completed':
          document.getElementById('tasks-completed').appendChild(taskEl);
          break;
    }
  });

};

const textEl = document.querySelector('.js-input');
textEl.addEventListener('keydown',(event) => {
    
    if(event.key === 'Enter' && event.target.value) {
      tasks.push({
        id:crypto.randomUUID(),
        title:event.target.value,
        status:'open'
      });

      saveToStorage(tasks);
      textEl.value='';
      renderTasks();
    }
  });

renderTasks();