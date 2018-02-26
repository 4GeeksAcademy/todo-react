import React from 'react';

import todoStore from '../stores/todoStore';
import * as TodoActions from '../actions/TodoActions.js'

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
    
    userClickedOnDelete(task){
    	console.log("The trash was clicked!!!", task);
    	TodoActions.deleteTask(task.id);
    }
    
    handleInputChange(evt){
    	this.theValueOfTheInput = evt.target.value;
    	console.log(this.theValueOfTheInput);
    }
    
	render() {
	    
	    var tasksToRender = this.state.data.map((task) => {
	    	const taskStyles = {};
	    	if(task.done == true){
	    		taskStyles.textDecoration = "line-through";
	    	}
	       return <li style={taskStyles} key={task.id}>
	    				<input type="checkbox" checked={(task.done) ? 'checked':''} /> 
	    				{task.title} 
	    				<a onClick={() => this.userClickedOnDelete(task)} href="#">delete</a>
	    		</li>
	    });
	    
		return (
			<div>
				<h1>Simple TODO App</h1>
				<input type="text" onChange={this.handleInputChange.bind(this)} />
				<ul>{tasksToRender}</ul>
			</div>
		)
	}
};
