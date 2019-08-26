import React from 'react';
import ReactDOM from 'react-dom';
class Todo extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const {text,priority,dueDate} = this.props;
        return (  
          <li>{text} {priority} {dueDate}</li>
        );
    }

}

export default Todo;


