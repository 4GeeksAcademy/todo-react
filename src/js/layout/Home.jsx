import React from 'react';

import todoStore from '../stores/todoStore';

export class Home extends React.Component {
    
    constructor(){
        super();
        
        this.state = { data: todoStore.getAllTasks() };
    }
    
    componentDidMount(){
        todoStore.on('change', () => {
            this.setState({ 
    		    data: todoStore.getAllTasks()
    		});
        });
    }
    
	render() {
	    
	    var tasksToRender = this.state.data.map(function(task){
	       return <li key={task.id}><input type="checkbox" /> {task.title} <a href="#">delete</a></li>
	    });
	    
		return (
			<div>
				<h1>Simple TODO App</h1>
				<ul>{tasksToRender}</ul>
			</div>
		)
	}
};
