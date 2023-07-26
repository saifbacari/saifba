import React, { FC } from "react";
import styles from './about.module.css';

interface AboutProps {}

const About: FC<AboutProps> = () => {

    return (
        <div className={styles.about}>
            <h1>Hello there</h1>
        </div>     
    )
}

export default About;
