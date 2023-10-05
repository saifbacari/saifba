import React, {FC, ReactNode} from "react";
import styles from './backdrop.module.css';

interface BackdropProps {
    className?: string;
    children: ReactNode;
    onClick:  () => void;
}

const Backdrop: FC<BackdropProps> = ({ className, children, onClick }) => {

    const classes = 'backdrop' + (className || '')
    return <div className={styles.backdrop + ' ' + classes}>{children}</div>
}

export default Backdrop;