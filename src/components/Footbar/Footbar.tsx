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
            <p>Saïfoullah Bacari© 2024</p>
            <ul className={styles.socialList}>
                <li><a href="https://twitter.com/Saifdot"><FontAwesomeIcon icon={faXTwitter} className={styles.twitterLogo} /></a></li>
                <li><a href="https://www.linkedin.com/in/saifoullah-bacari/"><FontAwesomeIcon icon={faLinkedinIn} className={styles.linkedinLogo} /></a></li>
                <li><a href="https://github.com/saifbacari"><FontAwesomeIcon icon={faGithub} className={styles.githubLogo} /></a></li>
            </ul>
        </div>  

        </Wrapper>

    )
}

export default Footbar;