import React from "react";
import styles from "./Cockpit.module.css";
import classes from "./Cockpit.module.css";

export default function Cockpit(props) {
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(styles.bold);
  }
  return (
    <div className={styles.Cockpit}>
      <h1>Hi, I'm a react app </h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
}
