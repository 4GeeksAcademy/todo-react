import todoDispatcher from '../dispatchers/todoDispatcher';

export function addNewTask(task){
    
      todoDispatcher.dispatch({
        actionType: 'TODO_ADD_TASK',
        data: task
      });
    
}

export function deleteTask(taskId){
    console.log('The action was dispatched');
      todoDispatcher.dispatch({
        actionType: 'DELETE_TASK',
        data: taskId
      });
    
}