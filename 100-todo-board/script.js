const tasks = [
  {
    id:1,
    name:'Task 1',
    status:'Open'
  },
  {
    id:2,
    name:'Task 2',
    status:'In progress'
  },
  {
    id:3,
    name:'Task 3',
    status:'Completed'
  },
  {
    id:4,
    name:'Task 4',
    status:'Completed'
  }
];



function renderTasks() {
  let openTaskHTML = '';
  let inProgressTaskHTML = '';
  let completedTaskHTML = '';

  tasks.forEach(task => {
    if(task.status === 'Open')
      openTaskHTML += `<li class="js-task open-tasks" data-task-id=${task.id}>${task.name}</li>`;

    if(task.status === 'In progress')
      inProgressTaskHTML += `<li class="js-task inprogress-tasks" data-task-id=${task.id}>${task.name}</li>`;

    if(task.status === 'Completed')
      completedTaskHTML += `<li class="js-task completed-tasks" data-task-id=${task.id}>${task.name}</li>`;
  });

  document.querySelector('.js-open-tasks')
    .innerHTML = openTaskHTML;

  document.querySelector('.js-inprogress-tasks')
    .innerHTML = inProgressTaskHTML;

  document.querySelector('.js-completed-tasks')
    .innerHTML = completedTaskHTML;

    document.querySelectorAll('.js-task')
    .forEach(link => {
      link.addEventListener('click',(evt) => {
        console.log(link.dataset.taskId);
        const id = link.dataset.taskId;
        let task = tasks.find(task => task.id == id);
        console.log(task);
        task.status = 'Completed';

        console.log('tasks',tasks);
        renderTasks();
      });
    });

}

renderTasks();


