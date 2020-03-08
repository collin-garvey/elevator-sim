import React from "react";
import Floor from "./Floor";
import styles from "./Building.module.css";
import { FLOORS } from "../constants";

function buildFloors() {
  const floors = [];

  for (let i = 1; i <= FLOORS; i++) {
    floors.push(<Floor key={i} number={i} />);
  }

  return floors.reverse();
}

const Building: React.FC = () => {
  return <div className={styles.Building}>{buildFloors()}</div>;
};

export default Building;
