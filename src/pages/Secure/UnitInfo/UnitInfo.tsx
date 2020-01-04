import Loader from 'components/Loader';
import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, CardBody, CardHeader, Col, FormGroup, Row } from 'reactstrap';
import PradeStatement from './ParadeStatement';
import UpComingEvents from './UpcomingEvents';

export const UnitInfo = (props: any) => {
  const { match } = props;
  const unitId = match.params.id;
  const [unitInfo, setUnitInfo]: any = useState({});
  const [isFetching, setFetching] = useState(false);

  console.log('unitInfo is', unitInfo);
  useEffect(() => {
    setFetching(true);
    fetch(`https://cisf-demo-api.herokuapp.com/v1/units_details?unitId=${unitId}`)
      .then(res => {
        return res.json();
      })
      .then(result => {
        setFetching(false);
        setUnitInfo(result[0]);
      })
      .catch(() => {
        setFetching(false);
      });
  }, []);

  const unitAddress = unitInfo.unit_address ? unitInfo.unit_address.split('\n') : [];

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <Row>
                <Col xs="3" lg="3">
                  <Button color="primary" onClick={goBack}>
                    <i className="fa fa-chevron-left" />
                    &nbsp; Back
                  </Button>
                </Col>
                <Col xs="6" lg="8">
                  <h4 className="font-weight-bold">{unitInfo.name_code && unitInfo.name_code}</h4>
                </Col>
                <Col xs="3" lg="1">
                  <h4 className="font-weight-bold">
                    <Badge
                      style={{
                        background: unitInfo.bar_color,
                        fontSize: 20,
                      }}
                    >
                      {unitId}
                    </Badge>
                  </h4>
                </Col>
              </Row>
            </CardHeader>
            {Object.values(unitInfo).length ? (
              <CardBody>
                <FormGroup style={{ border: '1px solid green', padding: 5, borderColor: 'black' }}>
                  <h2 style={{ textAlign: 'center' }}>Unit information</h2>
                  <Row>
                    <Col>
                      <h5 style={{ fontWeight: 'bold' }}>Sanctioned Strength</h5>
                    </Col>
                    <Col>
                      <h5>
                        <small>{unitInfo.saction_strength}</small>
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5 style={{ fontWeight: 'bold' }}>Available strength</h5>
                    </Col>
                    <Col>
                      <h5>
                        <small>{unitInfo.available_strength}</small>
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5 style={{ fontWeight: 'bold' }}>Near by Railway station</h5>
                    </Col>
                    <Col>
                      <h5>
                        <small>
                          {unitInfo.near_rail} ({unitInfo.rail_distance})
                        </small>
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5 style={{ fontWeight: 'bold' }}>Near by Airport</h5>
                    </Col>
                    <Col>
                      <h5>
                        <small>
                          {unitInfo.near_airport} ({unitInfo.airport_distance})
                        </small>
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5 style={{ fontWeight: 'bold' }}>Near by Unit</h5>
                    </Col>
                    <Col>
                      <h5>
                        <small>
                          {unitInfo.near_unit_name_code} ({unitInfo.unit_distance})
                        </small>
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5 style={{ fontWeight: 'bold' }}>Unit Address</h5>
                    </Col>
                    <Col>
                      <h5>
                        <small>
                          {unitAddress.map((address: any, index: any) => {
                            return (
                              <p key={index} style={{ margin: 0 }}>
                                {address}
                              </p>
                            );
                          })}
                        </small>
                      </h5>
                    </Col>
                  </Row>
                </FormGroup>
                <hr />
                <PradeStatement unitId={unitId} />
                <UpComingEvents unitId={unitId} />
              </CardBody>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {isFetching ? <Loader /> : <h2>No data found </h2>}
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UnitInfo;
