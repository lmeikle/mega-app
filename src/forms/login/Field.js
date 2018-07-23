import React from 'react';

export const myInput = props => {
  let { meta } = props;
  return (
    <div>
      <input {...props.input} type={props.type} placeholder={props.placeholder} />
      {meta.error && meta.touched && <div className="login-form-error">{meta.error}</div>}
    </div>
  );
};
