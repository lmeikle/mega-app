import React from 'react';

export const renderInputField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && ((error && <div>{error}</div>) || (warning && <div>{warning}</div>))}
    </div>
  </div>
);

export const renderSelectField = ({ input, label, type, disabled, meta: { touched, error }, children }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input} disabled={disabled}>
        {children}
      </select>
      {touched && error && <div>{error}</div>}
    </div>
  </div>
);
