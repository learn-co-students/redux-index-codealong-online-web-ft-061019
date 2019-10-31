/*
Our state is properly updating but we are not displaying 
these updates to the user. We need a component that references 
the store and then uses the data from the store to reference the list of Todos.

The CreateTodo component is handling the creation side of things, 
so let's make a new component where we'll be getting todos from the store. 
We'll call this TodosContainer and connect it to Redux.


Now, we aren't worried about dispatching actions here, only getting 
state from Redux, so we'll need to write out a mapStateToProps() 
function and include it as an argument for connect():

Now that we have a way to get data from Redux, we can
 create a presentational component to handle displaying our todos.
 todo.js

after making our todo and importing it and rendering todos
 our TodosContainer is mapping over the todos it received from Redux,
  passing the value of each todo into a child component, 
  Todo. Todo in this case doesn't have any Redux related code, and is a regular, functional component.

conclusion Ok, so we got our Todos component working simply by accessing the state from the store, and then iterating through the list in the Todos component.

  */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from '/Users/dawn/redux-index-codealong-online-web-ft-061019/src/components/todos/Todo.js' // make sure to import todo so you can render it
 
class TodosContainer extends Component {

renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
 
  render() {
    return(
      <div>{this.renderTodos()}</div>
    );
  }
};
 
const mapStateToProps = state => {
    return {
      todos: state.todos
    }
  }
   
  export default connect(mapStateToProps)(TodosContainer);