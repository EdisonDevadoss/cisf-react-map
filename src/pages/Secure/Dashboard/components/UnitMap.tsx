import { filter } from 'lodash';
import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import CityPin from '../../../../components/MapGl/CityPin';
import tempData from '../../../../config/tempData';

const mapbox_api =
  'pk.eyJ1IjoiZWRpc29uZGV2YWRvc3MiLCJhIjoiY2s0MTNweHlhMDdwZDNwcG95cmJraGl6dyJ9.aUK57pw316_tz92_mwsagA';

function UnitMapGl(props: any) {
  const [viewport, setViewport] = useState({
    width: '100vm',
    height: '100vh',
    latitude: 20.5937,
    longitude: 78.9626,
    zoom: 4.3,
    bearing: 0,
    pitch: 0,
  });

  const renderCityMarker = (city: any, index: any) => {
    return (
      <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
        <CityPin size={20} onClick={() => props.onClick(city.unit_id)} />
      </Marker>
    );
  };

  const filteredUnit = filter(tempData, data => data.latitude && data.longitude);
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={mapbox_api}
      mapStyle="mapbox://styles/edisondevadoss/ck42safmw09ls1co85isttdov"
      onViewportChange={(viewport: any) => {
        setViewport(viewport);
      }}
    >
      {filteredUnit.map(renderCityMarker)}
    </ReactMapGL>
  );
}

export default UnitMapGl;
