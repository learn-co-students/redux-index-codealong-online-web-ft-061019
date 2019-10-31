/*
write a functional component that returns an li displaying props:

Now we need to call this component from a map function in the 
TodosContainer component:
*/


import React from 'react'
 
const Todo = props => {
  return (
    <li>{props.text}</li>
  );
};
 
export default Todo;