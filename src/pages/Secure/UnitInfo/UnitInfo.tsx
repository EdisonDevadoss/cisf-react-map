import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Row, Badge } from 'reactstrap';
import PradeStatement from './ParadeStatement';

export const UnitInfo = (props: any) => {
  const { match } = props;
  const unitId = match.params.id;
  const [unitInfo, setUnitInfo] = useState({
    unit_id: 0,
    unit_address: '',
    saction_strength: '',
    available_strength: '',
    near_airport: '',
    unit_distance: '',
    near_rail: '',
    rail_distance: '',
    airport_distance: '',
    near_cisf_unit_id: '',
    name_code: '',
    near_unit_name_code: '',
  });

  console.log('unitInfo is', unitInfo);
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/v1/units_details?unitId=${unitId}`)
      .then(res => {
        return res.json();
      })
      .then(result => {
        setUnitInfo(result[0]);
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
                    <Badge color="success">{unitInfo.unit_id}</Badge>
                  </h4>
                </Col>
              </Row>
            </CardHeader>
            {Object.values(unitInfo).length ? (
              <CardBody>
                {/*<Row>
                  <Col xs="3" lg="3">
                    <Button color="primary">
                      <i className="fa fa-chevron-left" />
                      &nbsp; Back
                    </Button>
                  </Col>
                  <Col xs="6" lg="8">
                    <h4 className="font-weight-bold">{unitInfo.name_code && unitInfo.name_code}</h4>
                  </Col>
                  <Col xs="3" lg="1">
                    <h4 className="font-weight-bold">
                      <Badge color="success">{unitInfo.unit_id}</Badge>
                    </h4>
                  </Col>
                </Row>*/}
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
                          {unitAddress.map((address, index) => {
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
              </CardBody>
            ) : null}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UnitInfo;
