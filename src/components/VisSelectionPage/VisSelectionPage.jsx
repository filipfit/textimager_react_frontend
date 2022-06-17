import axios from 'axios';
import * as d3 from 'd3';
import { useEffect, useState } from 'react';
import CheckboxList from '../CheckBoxList/CheckboxList';
import Histogram from '../Histogram/Histogram';
import RadioGroup from '../RadioGroup/RadioGroup';

import request_list from '../../request_list.json';

import './VisSelectionPage.scss';

const URL = 'http://localhost:4567';

function getCheckedBoxes() {
  const checkedList = [];
  d3.selectAll('.Checkbox input:checked').each(function () {
    checkedList.push(d3.select(this).property('value'));
  });
  console.log(checkedList);
  return checkedList;
}

function getCheckedFile() {
  console.log(d3.select('.RadioGroup input:checked').property('value'));
  return d3.select('.RadioGroup input:checked').property('value');
}

async function requestFileList() {
  const res = await axios.get('http://localhost:4567/files');
  return res.data;
}

function handleSubmit() {
  const checkboxes = getCheckedBoxes();
  const file = getCheckedFile();

  if (checkboxes.includes('NE-hist')) {
    console.log('NE-hist');
    axios
      .get(URL + request_list['NE-hist']['route'], {
        params: { file: file, type: request_list['NE-hist']['type'] },
      })
      .then((res) => console.log(res.data));
  }
  if (checkboxes.includes('POS-hist')) {
    console.log('POS-hist');
    axios
      .get(URL + request_list['POS-hist']['route'], {
        params: { file: file, type: request_list['POS-hist']['type'] },
      })
      .then((res) => console.log(res.data));
  }
}

export default function VisSelectionPage() {
  let [histData, setHistData] = useState(null);
  let [fileList, setFileList] = useState(null);

  const checkboxes = [
    { name: 'NE-hist', label: 'Named Entity' },
    { name: 'POS-hist', label: 'Part Of Speech' },
  ];

  useEffect(() => {
    requestFileList().then((res) => {
      setFileList(res);
    });
  }, []);

  return (
    <div className="VisSelectionPage">
      <div className="form-container">
        {/* <CheckboxList className="file-selection" legendText="Legend Text!" />
        <button onClick={getCheckedBoxes}>Submit</button> */}
        {fileList && (
          <RadioGroup data={fileList} legendText="Choose a file to visualize" />
        )}

        <CheckboxList checkboxData={checkboxes} legendText="Bar Chart" />

        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
