import Loader from 'components/Loader';
import { map, sortBy } from 'lodash';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const UpComingEvents = (props: any) => {
  const [eventData, setEventData]: any = useState([]);
  const [isFetching, setFetching] = useState(false);
  console.log('eventData is', eventData);

  useEffect(() => {
    setFetching(true);
    fetch(`https://cisf-demo-api.herokuapp.com/v1/forecast/${props.unitId}`)
      .then(res => {
        return res.json();
      })
      .then(result => {
        const updatedParade = sortBy(result, [
          function(o) {
            return o.event_id;
          },
        ]);
        setFetching(false);
        setEventData(updatedParade);
      })
      .catch(() => {
        setFetching(false);
      });
  }, []);

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              {/*<i className="fa fa-align-justify"></i> */}
              Forecast
            </CardHeader>
            <CardBody>
              {!isFetching && eventData.length ? (
                <Table responsive={true} striped={true}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
                      <th>Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    {map(eventData, (data: any, index) => {
                      return (
                        <tr key={index}>
                          <td>{data.event_id}</td>
                          <td>{moment(data.event_date).format('DD MMM YYYY')}</td>
                          <td>{data.event_brief}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              ) : (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {isFetching ? <Loader /> : <h2>No data found </h2>}
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UpComingEvents;
