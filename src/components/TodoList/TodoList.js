
import React, {Component} from 'react';
import classNames from 'classnames/bind';
import styles from '../../styles/main.module.scss';
import TodoItem from '../TodoItem';

const cx = classNames.bind(styles);

class TodoList extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }
    
    render() {
        const {todos, onToggle, onRemove} = this.props;
        const todoItemList = todos.map(
            todo => (
                <TodoItem 
                    key= {todo.id}
                    id={todo.id}
                    done={todo.done}
                    onToggle={() => {onToggle(todo.id)}}
                    onRemove={() => {onRemove(todo.id)}}>
                    {todo.text}
                </TodoItem>
            )
        )

        return (
            <div className={ cx('todolist-task') } >
                <ul className={ cx('task-list') } >
                    {todoItemList}
                </ul>
            </div>
        );
    }
} 

export default TodoList;