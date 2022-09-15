import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import deltaPotImage from "../../assets/delta-pot.jpg"
import styles from "./Header.module.css";

const Header = props => {
  return ( 
    <React.Fragment>
      <header className={styles.header}>
        <h1>Delta Pot</h1>
        <HeaderCartButton/>
      </header>
      <div className={styles["main-image"]}>
        <img src={deltaPotImage} alt="A table of food"></img>
      </div>
    </React.Fragment>
   );
}
 
export default Header;