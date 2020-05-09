import React from "react";
import Building from "./Building";
import Shaft from "./Shaft";
import styles from "./Layout.module.css";

const Layout: React.SFC = () => {
  return (
    <>
      <div className={styles.shaftWrap}>
        <Building />
        <Shaft />
      </div>
      <div className={styles.controls}>
        <button type="button">Spawn Passenger</button>
        <button type="button">Clear Passengers</button>
        <button id="carUp" type="button">
          Move Car Up
        </button>
        <button id="carDown" type="button">
          Move Car Down
        </button>
      </div>
    </>
  );
};

export default Layout;
