import React from 'react';
import classNames from 'classnames/bind';
import styles from '../../styles/main.module.scss';

const cx = classNames.bind(styles);

const TodoInput = ({value, onChange, onInsert}) => {

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            onInsert();
        }
    }

    return (
        <div className={ cx('todolist-input-container') }>
            <input className={ cx('input-todolist') } type="text" placeholder="할일을 입력하세요" 
                onChange={onChange} 
                onKeyPress={handleKeyPress} 
                value={value} />
            <button onClick={onInsert} className={ cx('register-button') } type="button"><span>등록</span></button>
        </div>
    );
};

export default TodoInput;
