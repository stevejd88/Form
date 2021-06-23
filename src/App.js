import "./App.css";
import { useState, useEffect } from "react";
import { Form } from "./components/Form";
import TextInput from "./elements/formElements/TextInput";
import SelectComponent from "./components/fieldComponents/SelectComponent";
import NewSelect from "./components/fieldComponents/NewSelect";
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
  const [userName, setUserName] = useState("");
  const [repos, setRepos] = useState({});
  const [formUrl, setFormUrl] = useState("");

  const onChange = (e) => {
    setUserName(e.target.value);
  };

  const onSubmit = (data) => {
    setRepos(data);
  };

  const onClick = (username) => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        onSubmit(data);
      });
  };

  const onSelect = (e) => {
    setFormUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName("");
    window.location.href = `https://github.com/stevejd88/${formUrl}`;
  };

  return (
    <div style={APP_STYLE}>
      <h1>hello world</h1>
      <form onSubmit={handleSubmit}>
        <TextInput value={userName} onChange={onChange} />
        <button type='button' onClick={() => onClick(userName)}>
          Fetch
        </button>
        {repos.length > 0 ? (
          <NewSelect
            label='Repos'
            dataSet={repos}
            name='repos'
            onSelect={onSelect}
            value={formUrl}
          />
        ) : (
          ""
        )}

        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default App;
