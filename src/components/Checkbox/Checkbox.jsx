import { uniqueId } from 'lodash';
import React from 'react';
import './Checkbox.scss';

export default function Checkbox({ label, name, checked, onChange }) {
  const uid = uniqueId('formID-');

  return (
    <div className="Checkbox">
      <input
        value={name}
        type="checkbox"
        name={name}
        id={uid}
        defaultChecked={checked}
        onChange={onChange}
      />
      <label className="checkbox-label" htmlFor={uid}>
        {label}
      </label>
    </div>
  );
}
