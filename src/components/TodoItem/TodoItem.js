import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from '../../styles/main.module.scss';

const cx = classNames.bind(styles);

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { done, children, onToggle, onRemove, id } = this.props;
        const liClassNames = cx(
            'task-item',
            { 'task-item-done': done }
        );

        return (
            <li className={liClassNames} onClick={onToggle} >
                <div className={cx('task-button-container')} >
                    <button className={cx('task-button', 'task-button-delete')} type="button" 
                    onClick={(e) => {
                        onRemove();
                        e.stopPropagation();
                        }}>삭제</button>
                </div>
                <input className={cx('task-state-checkbox')} id={`test-${id}`} type="checkbox" readOnly checked={done} />
                <label className={cx('task-detail')}>
                    <span htmlFor="test" className={cx('task-description')}>{children}</span>
                </label>
            </li>
        );
    }
}

export default TodoItem;