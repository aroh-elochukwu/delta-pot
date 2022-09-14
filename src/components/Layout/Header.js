import React from "react";

import deltaPotImage from "../../assets/delta-pot.jpg"
import styles from "./Header.module.css";

const Header = props => {
  return ( 
    <React.Fragment>
      <header className={styles.header}>
        <h1>Delta Pot</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={deltaPotImage} alt="A table of food"></img>
      </div>
    </React.Fragment>
   );
}
 
export default Header;