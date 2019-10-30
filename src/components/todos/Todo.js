import React from 'react';

const Todo = props => {
   console.log("TodoProps:", props)
   return (
      <li>
         {props.text}
      </li>
   );
};

export default Todo;
