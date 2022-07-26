import React from "react";
import { TipCalculatorContext } from "../TipCalculator";

import "./TipCalculatorOutput.css";

const TipCalculatorOutput = () => {
  const {
    bill,
    percentage,
    numberOfPeople,
    setBill,
    setPercentage,
    setNumberOfPeople,
  } = React.useContext(TipCalculatorContext);
  return (
    <div className="tip-calculator-output">
      <div>
        <div className="tip-calculator-output-amount-container">
          <label className="tip-calculator-output-label">
            Tip Amount <br />
            <span>/ person</span>
          </label>
          <p id="tip-amount-output" className="tip-calculator-output-output">
            {bill && percentage && numberOfPeople
              ? ((bill / numberOfPeople) * (percentage / 100)).toLocaleString(
                  "en-US",
                  {
                    style: "currency",
                    currency: "USD",
                  }
                )
              : "$0.00"}
          </p>
        </div>
        <div className="tip-calculator-output-amount-container">
          <label className="tip-calculator-output-label">
            Total
            <br /> <span>/ person</span>
          </label>
          <p id="total-amount-output" className="tip-calculator-output-output">
            {bill && percentage && numberOfPeople
              ? (
                  (bill / numberOfPeople) * (percentage / 100) +
                  bill / numberOfPeople
                ).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })
              : "$0.00"}
          </p>
        </div>
      </div>
      <button
        className={`btn tip-calculator-output-button ${
          !bill && !percentage && !numberOfPeople ? "btn-disable" : ""
        }`}
        disabled={!bill && !percentage && !numberOfPeople ? true : false}
        onClick={() => {
          setBill(null);
          setPercentage(null);
          setNumberOfPeople(null);
        }}
      >
        RESET
      </button>
    </div>
  );
};

export default TipCalculatorOutput;
