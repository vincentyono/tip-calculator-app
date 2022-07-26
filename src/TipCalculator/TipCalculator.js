import React from "react";
import TipCalculatorInput from "./TipCalculatorInput/TipCalculatorInput";
import TipCalculatorOutput from "./TipCalculatorOutput/TipCalculatorOutput";

import "./TipCalculator.css";

export const TipCalculatorContext = React.createContext(null);

const TipCalculator = () => {
  const [bill, setBill] = React.useState(null);
  const [numberOfPeople, setNumberOfPeople] = React.useState(null);
  const [percentage, setPercentage] = React.useState(null);

  return (
    <main className="tip-calculator">
      <TipCalculatorContext.Provider
        value={{
          bill,
          numberOfPeople,
          percentage,
          setBill,
          setNumberOfPeople,
          setPercentage,
        }}
      >
        <TipCalculatorInput />
        <TipCalculatorOutput />
      </TipCalculatorContext.Provider>
    </main>
  );
};

export default TipCalculator;
