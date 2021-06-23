import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import PrimaryButton from "./elements/formElements/PrimaryButton";

const APP_STYLE = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: "2em",
  paddingBottom: "2em",
  backgroundColor: "#F0EBF8",
  minWidth: "100vw",
  minHeight: "100vh"
};

function App() {
  return (
    <div style={APP_STYLE}>
      <h1>hello world</h1>
      <Form formName='Test Form' />
      <div
        style={{
          paddingTop: "1em",
          width: "50%",
          minWinth: "20em",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start"
        }}
      >
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </div>
  );
}

export default App;
