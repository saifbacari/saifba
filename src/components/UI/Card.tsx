import React, {FC, ReactNode} from "react";
import styles from './card.module.css';

interface CardProps {
    className?: string;
    children: ReactNode;
}

const Card: FC<CardProps> = ({ className, children }) => {

    const classes = 'card' + (className || '')
    return <div className={styles.card + ' ' + classes}>{children}</div>
}

export default Card;