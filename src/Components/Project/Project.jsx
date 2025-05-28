import styles from "./Project.module.css";

export const Project = (props) => {
  return (
    <div className={styles.itemProject}>
        <img src={props.projectImg} />
        <h3>{props.projectTitle}</h3>
        <p>{props.projectDesc}</p>
        <div className={styles.wrapButtons}>
            <a href={props.projectGitHub} target="__blank">Github</a>
            <a href={props.projectDemo} target="__blank">Demo</a>
        </div>
    </div>
  );
};