import { ProjectButtons, ProjectContainer } from "./ProjectStyles";

export const Project = (props) => {
  return (
    <ProjectContainer>
        <img src={props.projectImg} />
        <h3>{props.projectTitle}</h3>
        <p>{props.projectDesc}</p>
        <ProjectButtons>
            <a href={props.projectGitHub} target="__blank">Github</a>
            {props.projectDemo && (
              <a href={props.projectDemo} target="__blank">Demo</a>
            )}
        </ProjectButtons>
    </ProjectContainer>
  );
};