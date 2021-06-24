import React from 'react';
import styled from 'styled-components';
import ProjectImg from '../../assets/images/dbms.jpg';

const ProjectItemStyles = styled.div`
  .projectItem-img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem-info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem-title {
    font-size: 2.2rem;
  }
  .projectItem-desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem-img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  link = '',
}) {
  return (
    <ProjectItemStyles>
      <a
        href={link}
        className="projectItem-img"
        target="_blank"
        rel="noreferrer"
      >
        <img src={img} alt="project img" />
      </a>
      <div className="projectItem-info">
        <a href={link} target="_blank" rel="noreferrer">
          <h3 className="projectItem-title">{title}</h3>
        </a>
        <p className="projectItem-desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
