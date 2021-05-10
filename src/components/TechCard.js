import React from 'react';

function TechCard(props) {
  return (
    <div className='col s6 m4 l3'>
      <div className={'card ' + props.color + ' lighten-2'}>
        <div className='card-content'>
            <div className='center-align'>
              <img className='responsive-img card-img' src={props.logo}
                alt={props.name + ' logo'} />
            </div>
            <div className='center-align'>
              <h6>{props.name}</h6>
            </div>
        </div>
      </div>
    </div>
  );
}

export default TechCard;