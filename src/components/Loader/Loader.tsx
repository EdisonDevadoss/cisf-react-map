import loader from 'assets/img/imageloader.gif';
import React from 'react';
import { FormGroup, Label } from 'reactstrap';

const Loader = () => {
  return (
    <FormGroup>
      <Label style={{ fontSize: 18 }}>Loading</Label>
      &nbsp;&nbsp;
      <img src={loader} style={{ height: 75, width: 75 }} />
    </FormGroup>
  );
};

export default Loader;
