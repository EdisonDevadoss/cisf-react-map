import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const defaultContainer = ({ children }: any) => <div className="change-map">{children}</div>;

const ChangeMapPanel = (props: any) => {
  const Container = props.containerComponent || defaultContainer;
  const [rSelected, setRSelected] = useState(1);

  const changeMap = (number: any) => {
    setRSelected(number);
    props.changeMap(number);
  };

  return (
    <Container>
      <h5>Click here to change map</h5>
      <ButtonGroup>
        <Button
          onClick={() => changeMap(1)}
          active={rSelected === 1}
          style={{ background: rSelected === 1 ? '#459048' : '#FFFF50' }}
        >
          Unit map
        </Button>
        <Button
          style={{ background: rSelected === 2 ? '#459048' : '#FFFF50' }}
          onClick={() => changeMap(2)}
          active={rSelected === 2}
        >
          Event map
        </Button>
      </ButtonGroup>
    </Container>
  );
};
export default ChangeMapPanel;
