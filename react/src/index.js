import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './Welcome';
import { FancyButton, ParagraphWithChildren, JSExpressionAsChildren, TodoList, JsxNotRender } from "./FancyButton";
import { Btn, secondaryButton, InformationButton, DynTxtButton } from "./Buttons";
import { LogInButton } from "./PropTyps";
import { BookList } from "./BookList";

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

const conditionalRenderingEnabled = false;

ReactDOM.render((
  <ol>
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

    <ParagraphWithChildren>
      Hello World
    </ParagraphWithChildren>

    <ParagraphWithChildren>
      Hello
      World
    </ParagraphWithChildren>

    {/* React trims all new line & whitespaces */}
    <ParagraphWithChildren>
      Hello



      World
    </ParagraphWithChildren>

    <JSExpressionAsChildren>
      {/* Passing a function (js expression) as children */}
      {(txt) => `Passed Text value is ${txt}`}
    </JSExpressionAsChildren>

    <TodoList />

    {/* Boolean (even true itself), null, undefined are not rendered to DOM */}
    <JsxNotRender> {false} </JsxNotRender>
    <JsxNotRender> {true} </JsxNotRender>
    <JsxNotRender> {null} </JsxNotRender>
    <JsxNotRender> {undefined} </JsxNotRender>

    {/* 0 is rendered though it's a falsy value */}
    <JsxNotRender> {0} </JsxNotRender>

    {/* Objects are not valid as JSX child */}
    {/* <JsxRenderFalsy> {{ s: 10 }} </JsxRenderFalsy> */}

    {/* Conditional rendering */}

    {conditionalRenderingEnabled && <Welcome name="Pollob" />}
    {conditionalRenderingEnabled && <Welcome name="VSS" />}
    {conditionalRenderingEnabled && <Welcome name="Expensify" />}

    <LogInButton buttonText="Login Button" isDisabled={true} />

    <BookList books={["A", "BV"]} />
  </ol>)
  , document.getElementById('root'));
