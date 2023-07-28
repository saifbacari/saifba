import React from "react";
import Card from "../Cards/Card";
import styles from './work.module.css';


const Work = () => {


    return(
        <div className={styles.work}>
          <Card className="header"> 
            <h3>02. Some Stuffs I Made</h3>
            <hr />
          </Card>
            <ul>
                <li>Project A</li>
                <li>Project B</li>
                <li>Project C</li>
                <li>Project D</li>
            </ul>

        </div>
    );
}

export default Work ;