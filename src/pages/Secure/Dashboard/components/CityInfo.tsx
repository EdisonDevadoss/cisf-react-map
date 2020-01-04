import { filter, map, size } from 'lodash';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import cityInfosData from '../../../../config/eventInfo';

const CityInfo = (props: any) => {
  const [cityInfos, setCityInfos]: any = useState([]);
  const { info } = props;

  useEffect(() => {
    const selectedCityInfo = filter(cityInfosData, cityInfo => {
      const date = moment(cityInfo.date, 'YYYY/MM/DD');
      return (
        cityInfo.state_name === info.name &&
        date.format('M') === info.month &&
        date.format('Y') === '2019'
      );
    });
    setCityInfos(selectedCityInfo);
    // fetch(`http://127.0.0.1:5000/v1/unit_detail?state=${info.name}&month=${info.month}&year=2019`).then((res) => {
    //     return res.json()
    // }).then((result) => {
    //     setCityInfos(selectedCityInfo);
    // });
  }, [info]);

  const displayName = info.name;
  return (
    <div
      style={{
        // backgroundImage: "url(" + "https://www.omilights.com/wp-content/uploads/2017/08/indian-flag-tiranga-1.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center">{displayName}</div>
      {size(cityInfos) > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Unit Name</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            {map(cityInfos, (cityInfo, index) => {
              return (
                <tr key={index}>
                  <td>{cityInfo.date}</td>
                  <td>{cityInfo.unit_name}</td>
                  <td className="ellipsis">{cityInfo.event_brief}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="text-center">No data </div>
      )}
    </div>
  );
};
export default CityInfo;
