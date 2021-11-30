import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faTwitch,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./SocialMedia.module.css";
const SocialMedia = () => {
  return (
    <ul className={styles.iconSocial}>
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
      </li>
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </li>
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={faTwitch} />
        </Link>
      </li>
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={faBehance} />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;
