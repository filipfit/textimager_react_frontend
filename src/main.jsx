import ReactDOM from 'react-dom/client';
import Checkbox from './components/Checkbox/Checkbox';
import CheckboxList from './components/CheckBoxList/CheckboxList';
import VisSelectionPage from './components/VisSelectionPage/VisSelectionPage';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <div>
    <VisSelectionPage />
    
  </div>
  // <Histogram data="test" />
  // </React.StrictMode>
);
