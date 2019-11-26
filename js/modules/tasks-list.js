function showTasks() {
    tasks.forEach(function(title){
        addNewTask(title);
    });
}

function toggleTaskComplete(task) {
task.classList.toggle('btn-success');
}

function deleteTask(task) {

    var liToDelate = task.closest('li');
    task.closest('ul').removeChild(liToDelate);

}