import React, { useState } from 'react';
import ChangeMapPanel from '../../../components/MapGl/ChangeMapPanel';
import EventMapGl from './components/EventMap';
import UnitMapGl from './components/UnitMap';

function MapG(props: any) {
  const [selectedMap, setSelectedMap] = useState(1);

  const changeMap = (value: number) => {
    setSelectedMap(value);
  };

  return (
    <div
      style={{
        height: '100%',
        position: 'relative',
      }}
    >
      {selectedMap === 1 ? <UnitMapGl onClick={props.onClick} /> : <EventMapGl />}
      <ChangeMapPanel containerComponent={props.containerComponent} changeMap={changeMap} />
    </div>
  );
}

export default MapG;
