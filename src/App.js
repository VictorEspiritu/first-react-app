import React, {Component} from 'react';
import './App.css';

import tasks from './tasks.json'
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'

class App extends Component{

   state = {
      tasks: tasks
   }

   addTask = (title, description) => {
      const newTask = {
         title: title,
         description: description,
         id: this.state.tasks.length
      };

      this.setState({
         tasks: [...this.state.tasks, newTask]
      });
   }

   deleteTask = (id) => {
      const dTask = this.state.tasks.filter( (t) => t.id !== id );
      this.setState({
         tasks: dTask
      });
   }
   
   checkDone = (id) => {
      const cTask = this.state.tasks.map((t) => {
         if (t.id === id) {
            t.done = !t.done;
         }

         return t;
      });

      this.setState({
         tasks: cTask
      });
   }

   render(){
      return(
         <div>
            <TaskForm addTask={this.addTask} />
            <Tasks 
               tasks={this.state.tasks} 
               deleteTask={this.deleteTask}
               checkDone={this.checkDone}/> 
         </div>
      )
   }
}

export default App;
