import todoDispatcher from '../dispatchers/todoDispatcher';

export function getBitcoinTicker(task){
    
      todoDispatcher.dispatch({
        actionType: 'TODO_ADD_TASK',
        data: task
      });
    
}