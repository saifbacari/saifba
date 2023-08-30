import React, { ReactNode } from 'react';
import styles from './wrapper.module.css'


interface WrapperProps {
    children: ReactNode;

}

const Wrapper: React.FC<WrapperProps> = ({children}) => {

    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default Wrapper;