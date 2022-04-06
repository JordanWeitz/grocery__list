import { useState, useEffect } from "react";
import axios from "axios";
import List from "./components/list/List";
import Search from "./components/search/Search";
import Selected from "./components/selected/Selected";
import Counter from "./components/counter/Counter";
import Title from "./components/title/Title";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  const [searchEmpty, setSearchEmpty] = useState(true);
  const [selected, setSelected] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toUpperCase();
    if (query.length === 0) {
      setSearchEmpty(true);
    }

    if (query.length < 2) {
      return;
    }

    axios.get("https://api.frontendeval.com/fake/food/" + query).then((res) => {
      setResults(res.data);
      setSearchEmpty(false);
    });
  };

  const addItem = (item) => {
    if (selected.includes(item)) {
      alert("Item already selected");
      return;
    }
    const temp = [...selected, item];

    setSelected(temp.sort());

    console.log(selected);
  };

  const removeItem = (item) => {
    const temp = selected.filter((i) => i !== item);
    setSelected(temp.sort());
  };

  return (
    <div className="App">
      <Title />
      <div className="lower__wrapper">
        <div className="grocery__wrapper">
          <div className="container">
            <Search handleSearch={handleSearch} searchEmpty={searchEmpty} />
            {searchEmpty ? <></> : <List results={results} addItem={addItem} />}
            <Selected selected={selected} removeItem={removeItem} />
            <Counter value={selected.length} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
