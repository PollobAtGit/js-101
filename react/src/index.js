import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './Welcome';

ReactDOM.render((
  <div>
    <Welcome name="Pollob" />
    <Welcome name="VSS" />
    <Welcome name="Expensify" />
  </div>)
  , document.getElementById('root'));
