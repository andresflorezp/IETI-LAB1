import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { todoList } = this.props;
        const data = content(todoList);

        return <ul>{data}</ul>;
    }
}


function content(todos) {
    const info=todos.map((post) =>
    <Todo
      text={post.text}
      priority={post.priority}
      dueDate={post.dueDate.toString()}
       />);
    return info;
}


export default TodoList;