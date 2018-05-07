import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './Welcome';
import { FancyButton } from "./FancyButton";
import { Btn, secondaryButton, InformationButton } from "./Buttons";

const oFancyBtn = React
  .createElement(FancyButton, {
    buttonName: "Created With function invocation",
    color: "green"
  });

const warningBtn = React.createElement(Btn.WarningButton);

ReactDOM.render((
  <div>
    <FancyButton buttonName="Fancy Button" color="red" />
    <FancyButton buttonName="Fancy Default Button" />
    {oFancyBtn}
    {warningBtn}

    {/* Dot notation to get nested component from exported component */}
    <Btn.DangerButton />
    <Btn.primaryButton />
    
    {/* This component will not be rendered */}
    <secondaryButton />
    <InformationButton />

    <Welcome name="Pollob" />
    <Welcome name="VSS" />
    <Welcome name="Expensify" />
  </div>)
  , document.getElementById('root'));
