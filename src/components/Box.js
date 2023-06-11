import React from "react";
import styles from "../styles/Box.module.css";

function Box({ title, children }) {
  return <div className={styles.box}>{children}</div>;
}

export default Box;
