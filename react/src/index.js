import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './Welcome';
import { FancyButton } from "./FancyButton";

const oFancyBtn = React
  .createElement(FancyButton, {
    buttonName: "Created With function invocation",
    color: "green"
  });

ReactDOM.render((
  <div>
    <FancyButton buttonName="Fancy Button" color="red" />
    <FancyButton buttonName="Fancy Default Button" />
    {oFancyBtn}

    <Welcome name="Pollob" />
    <Welcome name="VSS" />
    <Welcome name="Expensify" />
  </div>)
  , document.getElementById('root'));
