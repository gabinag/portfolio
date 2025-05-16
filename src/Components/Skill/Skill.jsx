import React from "react";
import styles from './Skill.module.css';

export const Skill = (props) => {
  return (
    <div className={styles.skillItem}>
        <img src={props.skillIcon} alt={`Ícone ${props.skillTitle}`} />
        <h3>{props.skillTitle}</h3>
        <p>{props.skillLevel}</p>
    </div>
  );
};
