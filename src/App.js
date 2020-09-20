import React, {Component} from 'react';
import './App.css';


class MyComponent extends Component {

   state = {
      show: true
   }

   showGreet = ()=>{
      this.setState({show: !this.state.show})
   }

   render(){
      if (this.state.show) {
         return(
            <div className="sayHello">
               <h4>{this.props.greet}</h4> 
               <p>{this.props.description}</p>
               <button onClick={this.showGreet}>Hide</button>
            </div>
         )
      }else {
         return(
            <div className="sayHello">
               <p>No hay saludo...<br/></p>
               <button onClick={this.showGreet}>Show</button>
            </div>
         ) 
      }
   }
}

class App extends Component {
   render() {
      
     return (
        <div>
            <h3>First Component</h3>
            <MyComponent greet="Hello World" description="Saludo en Ingles"/>
            <MyComponent greet="Hola a Todos" description="Saludo en Espa;ol"/>
            <MyComponent greet="Knnnnn" description="Saludo en knnn"/>
        </div>
     )
   }
}

//const App = () => <div><h3>First Component</h3></div>
 
/*function App() {

  return ( //Vamos a defini<]
     <div>
         <h3>First Component</h3>
     </div>
  )
}*/

export default App;
