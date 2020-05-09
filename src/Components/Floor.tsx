import React from "react";
import Passenger from "./Passenger";

import styles from "./Floor.module.css";

interface FloorProps {
  number: number;
}

const Floor: React.SFC<FloorProps> = (props) => {
  return (
    <div className={styles.Floor}>
      <span>{props.number}</span>
      <Passenger destination={10} uuid="something" />
    </div>
  );
};

export default Floor;
