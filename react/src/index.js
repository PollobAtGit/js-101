import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './Welcome';
import { FancyButton, ParagraphWithChildren } from "./FancyButton";
import { Btn, secondaryButton, InformationButton, DynTxtButton } from "./Buttons";

const oFancyBtn = React
  .createElement(FancyButton, {
    buttonName: "Created With function invocation",
    color: "green"
  });

const warningBtn = React.createElement(Btn.WarningButton);

const fancyButtonProps = {
  color: "crimson",
  buttonName: "js object property expended"
};

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

    {/* Default value if a property is true if not specified */}
    <DynTxtButton isDanger />
    <DynTxtButton isDanger={false} />

    {/* Spreading a js object that contains all properties */}
    <FancyButton {...fancyButtonProps} />

    <ParagraphWithChildren>

      {/* Providing children to component */}
      <h1>Child Header</h1>
      <ul>
        <li>List Item 1</li>
        <li>List Item 1</li>
        <li>List Item 1</li>
      </ul>

      {/* Components are JSX element. So other components can be passed as children */}
      <DynTxtButton isDanger />
    </ParagraphWithChildren>

    <Welcome name="Pollob" />
    <Welcome name="VSS" />
    <Welcome name="Expensify" />
  </div>)
  , document.getElementById('root'));
