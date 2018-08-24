import React from 'react';

export const Field = props => {
  const { error, label, touched, ...others } = props;

  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...others} />
        {error && touched && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

export const SelectField = props => {
  const { error, label, touched, disabled, children, ...others } = props;

  return (
    <div>
      <label>{label}</label>
      <div>
        <select {...others} disabled={disabled}>
          {children}
        </select>
        {error && touched && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};
