import React from 'react';
import MapGl from './MapGl';

export const Dashboard = (props: any) => {
  const unitInfo = (id: any) => {
    props.history.push(`/unitInfo/${id}`);
  };

  return (
    <div>
      <MapGl onClick={unitInfo} />
    </div>
  );
};

export default Dashboard;
