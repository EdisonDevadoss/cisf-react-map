import Tippy from '@tippy.js/react';
import React from 'react';
import 'styles/map.css';
import 'tippy.js/dist/tippy.css';

const Marker = (props: any) => {
  const color = 'red';
  return (
    <Tippy content={props.text}>
      <div className="pin" style={{ backgroundColor: color, cursor: 'pointer' }} />
    </Tippy>
  );
};
export default Marker;
