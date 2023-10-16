import React from "react";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import styles from './footbar.module.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Wrapper from "../../helpers/Wrapper";



interface FootbarProps {

}

const Footbar: React.FC<FootbarProps> = ({}) => {
    return(
        <Wrapper>
        <hr/>
        <div className={styles.footbar}>
            <p>Name Surname 2023</p>
            <ul className={styles.socialList}>
                <li><FontAwesomeIcon icon={faXTwitter} /></li>
                <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
                <li><FontAwesomeIcon icon={faGithub} /></li>
            </ul>
        </div>  

        </Wrapper>

    )
}

export default Footbar;