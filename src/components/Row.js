import React from 'react';

function Row(props) {
  return (
    <div className='row no-top-margin no-bottom-margin'>
      {props.children}
    </div>
  );
}

export default Row;