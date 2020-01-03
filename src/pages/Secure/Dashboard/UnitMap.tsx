import GoogleMapReact from 'google-map-react';
import React, { useEffect, useState } from 'react';
import Geocode from 'react-geocode';
import Marker from '../../../components/Maps/Marker';
import TempData from './TempData';

Geocode.setApiKey('AIzaSyCpQX4H0QPxVgKuNMZ0ELG_ymgT8RHcKh4');

const SimpleMap = (props: any) => {
  const [location, setLocation] = useState([]);

  const getLocation = (address: any) => {
    return new Promise(reslove => {
      return Geocode.fromAddress(address).then((response: any) => {
        const { lat, lng } = response.results[0].geometry.location;
        const result = {
          lat,
          lng,
        };
        reslove(result);
      });
    });
  };

  const updatedData = () =>
    Promise.all(
      TempData.map((detail: any) => {
        return getLocation(detail.unit_address).then((res: any) => {
          const resData = {
            ...detail,
            lat: res.lat,
            lng: res.lng,
          };
          return resData;
        });
      }),
    );

  useEffect(() => {
    updatedData().then((res: any) => {
      setLocation(res);
    });
  }, [updatedData]);

  const onGoogleApiLoaded = (map: any, maps: any) => {
    const triangleCoords = [
      { lat: 20.5937, lng: 78.9629 },
      { lat: 19.5937, lng: 68.9629 },
      { lat: 50.5937, lng: 55.9629 },
      { lat: 10.5937, lng: 20.9629 },
      { lat: 20.5937, lng: 78.9629 },
    ];

    // Construct the polygon.
    const bermudaTriangle = new maps.Polygon({
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      paths: triangleCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
    });
    bermudaTriangle.setMap(map);
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCpQX4H0QPxVgKuNMZ0ELG_ymgT8RHcKh4' }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        // onGoogleApiLoaded={({ map, maps }) => onGoogleApiLoaded(map, maps)}
      >
        {location.length
          ? location.map((mapDetail: any, index: number) => {
              return (
                <Marker
                  key={index}
                  lat={mapDetail.lat}
                  lng={mapDetail.lng}
                  text={`${mapDetail.unit_name} (${mapDetail.available_strength}/${mapDetail.saction_strength})`}
                />
              );
            })
          : null}
      </GoogleMapReact>
    </div>
  );
};

SimpleMap.defaultProps = {
  center: {
    lat: 20.5937,
    lng: 78.9629,
  },
  zoom: 5,
};

export default SimpleMap;
