import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import TipCalculator from "./TipCalculator/TipCalculator";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <TipCalculator />
      <Footer />
    </React.Fragment>
  );
};

export default App;
