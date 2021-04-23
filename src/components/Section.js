import React from 'react';

function Section(props) {
  return (
    <section id={props.id} className={props.color + ' lighten-4'}>
      <h4 className={'center-align section-title ' + props.color + ' lighten-2'}>
        {props.title}
      </h4>
      <div class="row no-top-margin no-bottom-margin">
        {props.children}
      </div>
    </section>
  );
}

export default Section;