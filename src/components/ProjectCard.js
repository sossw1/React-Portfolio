import React from 'react';
import Row from './Row';

function ProjectCard(props) {
  return (
    <div className='col s12'>
      <div className={'card ' + props.color + ' lighten-2'}>
        <div className='card-content'>
          <span className='card-title center-align'>{props.title}</span>
          <div className='center-align'>
            <img className='responsive-img card-img' src={props.screenshot}
              alt={props.title + ' Screenshot'} />
          </div>
          <p className='center-align'>{props.description}</p><br/>
          <p className='center-align'>Contributions: {props.contribution}</p>
        </div>
        <div className='card-action'>
          <Row>
            <div className='center-align col s6'>
              <a className='black-text' href={props.repositoryLink}
                rel='noreferrer' target='_blank'>Repository</a>
            </div>
            <div className='center-align col s6'>
              <a className='black-text' href={props.appLink}
              rel='noreferrer' target='_blank'>Deployed App</a>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;