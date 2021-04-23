import React from 'react';
import Row from './Row';

function Section(props) {
  return (
    <section id={props.id} className={props.color + ' lighten-4'}>
      <h4 className={'center-align section-title ' + props.color + ' lighten-2'}>
        {props.title}
      </h4>
      <Row>
        {props.children}
      </Row>
    </section>
  );
}

export default Section;