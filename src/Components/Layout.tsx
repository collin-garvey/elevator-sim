import React from "react";
import Building from "./Building";
import Shaft from "./Shaft";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <div className={styles.shaftWrap}>
        <Building />
        <Shaft />
      </div>
      <div className={styles.controls}>
        <button type="button">Spawn Passenger</button>
        <button type="button">Clear Passengers</button>
      </div>
    </>
  );
};

export default Layout;
