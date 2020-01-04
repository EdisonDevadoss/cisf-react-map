import Loader from 'components/Loader';
import { sortBy } from 'lodash';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const labels = {
  total_strength: 'Total strength',
};

const PradeStatement = (props: any) => {
  const [paradeData, setParadeData]: any = useState([]);
  const [isFetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch(`https://cisf-demo-api.herokuapp.com/v1/parade_statement?id=${props.unitId}`)
      .then(res => {
        return res.json();
      })
      .then(result => {
        setFetching(false);
        const updatedParade = sortBy(result, [
          function(o) {
            return o.parade_id;
          },
        ]);
        setParadeData(updatedParade);
      })
      .catch(() => {
        setFetching(false);
      });
  }, []);

  function toolTipLabelFormatter(value: any) {
    return `Prade id :   ${value}`;
  }

  function toolTipFormatter(value: any, label: string) {
    return [value, `${labels[label]}`];
  }

  function renderLegendText(value: any, entry: any) {
    const { color } = entry;
    return <span style={{ color }}>{labels[value]}</span>;
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active) {
      return (
        <div
          style={{ background: '#FFFFFF', padding: 2, border: '1px solid', borderColor: '#DEDEDE' }}
        >
          <p style={{ margin: 3 }}>
            Parade ID : <span>{payload[0].payload.parade_id}</span>
          </p>
          <p style={{ margin: 3, color: '#82ca9d' }}>
            Total Strength :<span>{payload[0].payload.total_strength}</span>
          </p>
          <p style={{ margin: 3 }}>
            Deficiency : <span>{payload[0].payload.deficiency}</span>
          </p>
          <p style={{ margin: 3 }}>
            Surplus : <span>{payload[0].payload.surplus}</span>
          </p>
          <p style={{ margin: 3 }}>
            Total out : <span>{payload[0].payload.total_out}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  const posted: any = paradeData.length && paradeData[0].posted;
  const surplus: any = paradeData.length && paradeData[0].surplus;
  const deficiency: any = paradeData.length && paradeData[0].deficiency;
  const totalOut: any = paradeData.length && paradeData[0].total_out;
  const total: any = paradeData.length && paradeData[0].total_strength;
  const createdOn: any = paradeData.length && paradeData[0].created_on;
  const createdTime: any = moment(createdOn).format('DD MMM YYYY');

  return (
    <div>
      <Row>
        <Col>
          <Card>
            <CardHeader>Parade Statement ({createdTime})</CardHeader>
            <CardBody>
              {!isFetching && paradeData.length ? (
                <Row>
                  <Col>
                    <div className="callout callout-info">
                      <small className="text-muted">Posted</small>
                      <br />
                      <strong className="h4">{posted}</strong>
                    </div>
                  </Col>
                  <Col>
                    <div className="callout callout-danger">
                      <small className="text-muted">Surplus</small>
                      <br />
                      <strong className="h4">{surplus}</strong>
                    </div>
                  </Col>
                  <Col>
                    <div className="callout callout-warning">
                      <small className="text-muted">Deficiency</small>
                      <br />
                      <strong className="h4">{deficiency}</strong>
                    </div>
                  </Col>
                  <Col>
                    <div className="callout callout-success">
                      <small className="text-muted">Total</small>
                      <br />
                      <strong className="h4">{total}</strong>
                    </div>
                  </Col>
                  <Col>
                    <div className="callout callout-danger">
                      <small className="text-muted">Total out</small>
                      <br />
                      <strong className="h4">{totalOut}</strong>
                    </div>
                  </Col>
                </Row>
              ) : null}
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardHeader>All Parade Statements</CardHeader>
            <CardBody>
              {!isFetching && paradeData.length ? (
                <LineChart
                  width={950}
                  height={300}
                  data={paradeData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="parade_id" />
                  <YAxis />
                  <Tooltip
                    // labelFormatter={toolTipLabelFormatter}
                    // formatter={toolTipFormatter}
                    content={CustomTooltip}
                  />
                  <Legend verticalAlign="top" formatter={renderLegendText} />
                  <Line
                    type="monotone"
                    dataKey="total_strength"
                    stroke="#82ca9d"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              ) : (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {isFetching ? <Loader /> : <h2>No data found</h2>}
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default PradeStatement;
