import React from "react";

import styles from "./Passenger.module.css";

interface PassengerProps {
  destination: number;
  uuid: string;
}

const Passenger: React.FC<PassengerProps> = () => {
  return <div className={styles.Passenger}></div>;
};

export default Passenger;
