import React from 'react';
import classNames from 'classnames/bind';
import styles from '../../styles/main.module.scss';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => {

    return (
        <div className={ cx('todolist') }>
            <div className={ cx('todolist-template') }>
                <p>TODO LIST</p>
            </div>
            {children}
        </div>
    );
};

export default PageTemplate;