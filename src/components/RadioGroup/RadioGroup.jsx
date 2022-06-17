import { uniqueId } from 'lodash';
import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import './RadioGroup.scss';

export default function RadioGroup({ data, legendText }) {
  const uid = uniqueId('radioGroupID-');

  const radioButtons = data.map((d) => {
    const radioUID = uniqueId('radioID-');
    return (
      <div key={d}>
        <input type="radio" id={radioUID} name={uid} value={d} />
        <label className="radio-label" htmlFor={radioUID}>
          {d}
        </label>
      </div>
    );
  });

  return (
    <fieldset className="RadioGroup">
      <legend>{legendText}</legend>
      {radioButtons}
    </fieldset>
  );
}
