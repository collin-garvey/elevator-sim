import React from "react";
import Car from "./Car";

import styles from "./Shaft.module.css";

const Shaft: React.FC = () => {
  return (
    <div className={styles.Shaft}>
      <Car />
    </div>
  );
};

export default Shaft;
