import React from 'react';
import { Form } from 'semantic-ui-react';

export const myInput = props => {
  let { meta } = props;
  return (
    <div>
      <Form.Field>
        <input {...props.input} type={props.type} placeholder={props.placeholder} />
        {meta.error && meta.touched && <div>{meta.error}</div>}
      </Form.Field>
    </div>
  );
};
