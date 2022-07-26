import React from "react";
import IconDollar from "../../images/icon-dollar.svg";
import IconPerson from "../../images/icon-person.svg";
import { TipCalculatorContext } from "../TipCalculator";

import "./TipCalculatorInput.css";

const TipCalculatorInput = () => {
  const [buttonsActive, setButtonsActive] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [numberOfPeopleError, setNumberOfPeopleError] = React.useState(false);
  const {
    setBill,
    setPercentage,
    setNumberOfPeople,
    numberOfPeople,
    bill,
    percentage,
  } = React.useContext(TipCalculatorContext);

  const billInput = React.useRef();
  const customInput = React.useRef();
  const numberOfPeopleInput = React.useRef();

  React.useEffect(() => {
    if (bill == null && percentage == null && numberOfPeople == null) {
      billInput.current.value = null;
      customInput.current.value = null;
      numberOfPeopleInput.current.value = null;
      setButtonsActive([false, false, false, false, false]);
    }
  }, [bill, percentage, numberOfPeople]);

  return (
    <div className="tip-calculator-input">
      <div className="tip-calculator-input-bill">
        <label
          id="bill-label"
          for="bill-input"
          className="tip-calculator-input-label"
        >
          Bill
        </label>
        <div className="tip-calculator-input-input-container">
          <img id="dollar-icon" src={IconDollar} alt="dollar icon" />
          <input
            id="bill-input"
            type="number"
            ref={billInput}
            placeholder="0"
            onChange={(e) => {
              setBill(parseInt(e.target.value));
            }}
            onFocus={(e) => {
              e.target.value = null;
            }}
            className="tip-calculator-input-input"
          />
        </div>
      </div>
      <div className="tip-calculator-input-select-tip">
        <label
          id="select-tip-label"
          for="select-tip-selections"
          className="tip-calculator-input-label"
        >
          Select Tip %
        </label>
        <div
          id="select-tip-selections"
          className="tip-calculator-input-select-tip-container"
        >
          <button
            className={`btn tip-calculator-input-select-tip-buttons ${
              buttonsActive[0] && "active"
            }`}
            onClick={() => {
              setPercentage(5);
              setButtonsActive([true, false, false, false, false]);
            }}
            ref={customInput}
          >
            5%
          </button>
          <button
            className={`btn tip-calculator-input-select-tip-buttons ${
              buttonsActive[1] && "active"
            }`}
            onClick={() => {
              setPercentage(10);
              setButtonsActive([false, true, false, false, false]);
            }}
          >
            10%
          </button>
          <button
            className={`btn tip-calculator-input-select-tip-buttons ${
              buttonsActive[2] && "active"
            }`}
            onClick={() => {
              setPercentage(15);
              setButtonsActive([false, false, true, false, false]);
            }}
          >
            15%
          </button>
          <button
            className={`btn tip-calculator-input-select-tip-buttons ${
              buttonsActive[3] && "active"
            }`}
            onClick={() => {
              setPercentage(25);
              setButtonsActive([false, false, false, true, false]);
            }}
          >
            25%
          </button>
          <button
            className={`btn tip-calculator-input-select-tip-buttons ${
              buttonsActive[4] && "active"
            }`}
            onClick={() => {
              setPercentage(50);
              setButtonsActive([false, false, false, false, true]);
            }}
          >
            50%
          </button>
          <div className="tip-calculator-input-select-tip-custom-input-container">
            <input
              id="custom-input"
              className="tip-calculator-input-input"
              type="number"
              placeholder="Custom"
              onChange={(e) => {
                setPercentage(parseInt(e.target.value));
              }}
              onFocus={(e) => {
                e.target.value = null;
                setButtonsActive([false, false, false, false, false]);
              }}
            />
          </div>
        </div>
      </div>
      <div className="tip-calculator-input-number-of-people">
        <label
          id="number-of-people-label"
          for="number-of-people-input"
          className="tip-calculator-input-label"
        >
          Number of people{" "}
          <span
            id="number-of-people-error"
            className={`${!numberOfPeopleError && "hide"}`}
          >
            Can't be zero
          </span>
        </label>
        <div className="tip-calculator-input-number-of-people-input-container">
          <img id="person-icon" src={IconPerson} alt="person icon" />
          <input
            id="number-of-people-input"
            type="number"
            className={`tip-calculator-input-input ${
              numberOfPeopleError && "input-error"
            }`}
            placeholder="0"
            onChange={(e) => {
              setNumberOfPeople(parseInt(e.target.value));
              setNumberOfPeopleError(false);
              if (parseInt(e.target.value) === 0) {
                setNumberOfPeopleError(true);
              }
            }}
            onFocus={(e) => {
              e.target.value = null;
            }}
            ref={numberOfPeopleInput}
          />
        </div>
      </div>
    </div>
  );
};

export default TipCalculatorInput;
