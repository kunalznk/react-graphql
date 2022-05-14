import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Card } from "./components/Card/index";
import { FlexColumnSpaceBetween } from "./components/commonComponents/commonStyles";

function App() {
  return (
    <FlexColumnSpaceBetween>
      <Header />
      {[1, 2, 3, 4].map(() => {
        return <Card />;
      })}
    </FlexColumnSpaceBetween>
  );
}

export default App;
