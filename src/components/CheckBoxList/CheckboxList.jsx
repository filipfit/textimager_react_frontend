import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import './CheckboxList.scss';

export default function CheckboxList({ checkboxData, legendText }) {
  const testData = [
    { name: 'testName', label: 'testLabel' },
    { name: 'testName2', label: 'testLabel2' },
  ];
  const checkboxes = checkboxData.map((d) => (
    <Checkbox name={d.name} label={d.label} key={d.name} />
  ));

  return (
    <fieldset className="Checkboxlist">
      <legend className="checkboxlist-legend">{legendText}</legend>
      {checkboxes}
    </fieldset>
  );
}
