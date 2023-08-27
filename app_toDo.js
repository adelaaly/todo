


    document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.getElementById("add-btn");
    const taskList = document.getElementById('taskList');
    const taskInput = document.getElementById('taskInput');

    taskInput.style.fontFamily = "  font-family: 'Tajawal', sans-serif;"
        addBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            const taskTextElement = document.createElement('span');
            taskTextElement.textContent = taskText;
            const container = document.createElement('div');
            container.classList.add('containerJs');
            const newDivLeft = document.createElement('div');
            const doneButton = document.createElement('img');
            doneButton.src = 'not_yet.png';
            doneButton.classList.add('done-button');
            const deleteButton = document.createElement('img');
            deleteButton.src = 'delet.png';
            deleteButton.classList.add('delete-button');


            newDivLeft.appendChild(doneButton);
            newDivLeft.appendChild(deleteButton);
            container.appendChild(taskTextElement);
            container.appendChild(newDivLeft);
            taskItem.appendChild(container);
           
            let btn = true;
            doneButton.addEventListener('click', function() {
              btn = !btn;
              if (btn){
                doneButton.src ='not_yet.png';
                doneButton.style.opacity ='80%';
                container.style.backgroundColor = "";
                taskTextElement.style.opacity = "100%";
                taskItem.style.textDecoration = "none";

              }else{
                doneButton.src = 'done.png';
                doneButton.style.opacity ='100%';
                taskItem.style.textDecoration = "line-through";
                taskTextElement.style.opacity = "60%";
                container.style.backgroundColor = "#c7c5c5";
              }
              
            });

            deleteButton.addEventListener('click', function() {
                taskList.removeChild(taskItem);
            });

            taskList.appendChild(taskItem);
            taskInput.value = '';

        }
    });
});