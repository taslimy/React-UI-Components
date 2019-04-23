import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <section className="App">
      <CalculatorDisplay />
      <section className="buttons">
        <section className="number-buttons">
          <section className="toprow">
            <NumberButton text="clear"/>
          </section>
          <section className="row">
            <NumberButton text="7" class="small" />
            <NumberButton text="8" class="small" />
            <NumberButton text="9" class="small" />
          </section>
          <section className="row">
            <NumberButton text="4" class="small" />
            <NumberButton text="5" class="small" />
            <NumberButton text="6" class="small" />
          </section>
          <section className="row">
            <NumberButton text="1" class="small" />
            <NumberButton text="2" class="small" />
            <NumberButton text="3" class="small" />
          </section>
          <section className="botrow">
            <NumberButton text="0" />
          </section>
        </section>
        <section className="action-buttons">
          <ActionButton text="&#247;" />
          <ActionButton text="x" />
          <ActionButton text="&#8722;" />
          <ActionButton text="+" />
          <ActionButton text="=" />
        </section>
      </section>
    </section>
  );
};

export default App;