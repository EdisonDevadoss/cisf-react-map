import moment from 'moment';
import React, { PureComponent } from 'react';

const defaultContainer = ({ children }: any) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent<any> {
  public render() {
    const Container = this.props.containerComponent || defaultContainer;
    const { settings } = this.props;

    const getDate = (number: any) => {
      const date = moment('2019').add(number - 1, 'months');
      return date.format('MMM-YYYY');
    };

    return (
      <Container>
        <h6>Events by state</h6>
        <p>
          Map showing the number of CISF events for the month of
          <b>{getDate(settings.month)}</b>. Hover over a state to see details.
        </p>
        <hr />
        <div key={'month'} className="input" style={{ margin: 0 }}>
          <label className="label" style={{ margin: 0 }}>
            Month
          </label>
          <input
            style={{ margin: 0 }}
            type="range"
            value={settings.month}
            min={1}
            max={12}
            step={1}
            onChange={evt => this.props.onChange('month', evt.target.value)}
          />
        </div>
      </Container>
    );
  }
}
