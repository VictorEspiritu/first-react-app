import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Task.css'

class Task extends Component{

   styleCompleted(){
      return {
         textDecoration: this.props.task.done ? 'line-through': 'none'
      }
   }
   render(){
      const {task} = this.props;

      return <div className="task">
               <h3>{task.title}</h3>  
               <div className="task-dsc">
                  <input 
                     type="checkbox" 
                     onChange={this.props.checkDone.bind(this, task.id)} 
                     />
                  <p style={this.styleCompleted()}>{task.description} </p>
                  {task.done}
               </div>
               <button onClick={this.props.deleteTask.bind(this, task.id)}>x</button>
            </div>
   }
}

Task.propTypes = {
   task: PropTypes.object.isRequired
}

export default Task
