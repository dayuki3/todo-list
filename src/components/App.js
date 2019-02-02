import React, { Component } from 'react';
import PageTemplate from './PageTemplate/';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const testDatas = new Array(500).fill(0).map(
    (foo, index) => ({id:index, text: `일정${index}`, done: false })
);

class App extends Component {

    state = {
        input : '',
        // todos : [
        //     {id: 0, text: '리액트 공부하기..', done: false},
        //     {id: 1, text: '홍홍홍', done: true}
        // ],
        todos: testDatas,
    }

    id = 1;
    _getId = () => {
        return ++this.id;
    }
    /*왜 constructor 내부에 this.state를 하면 에러나지?*/
    
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }

    _handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            input : value,
        });
    }

    _handleInsert = () => {
        const {todos, input } = this.state;

        const newTodo = {
            text: input,
            done: false,
            id: this._getId()
        }

        this.setState({
            todos: [...todos, newTodo],
            input: '',
        });
    }

    _handleToggle = (id) => {
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        const toggled = {
            ...todos[index],
            done: !todos[index].done
        }

        this.setState({
            todos: [
                ...todos.slice(0, index),
                toggled,
                ...todos.slice(index+1, todos.length)
            ]
        });

    }

    _handleRemove = (id) => {
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        this.setState({
            todos: [
                ...todos.slice(0, index),
                ...todos.slice(index+1, todos.length)
            ]
        });
    }


    render() {
        const {input, todos} = this.state;
        const { _handleChange, _handleInsert, _handleToggle, _handleRemove} = this;
        return (
            <PageTemplate>
                <TodoInput onChange={_handleChange} onInsert={_handleInsert} value={input}/>
                <TodoList todos={todos} onToggle={_handleToggle} onRemove={_handleRemove}/>
            </PageTemplate>
        );
    }
}

export default App;