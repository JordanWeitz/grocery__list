import { useState, useEffect } from "react";
import axios from "axios";

import useHandleSearch from "./hooks/useHandleSearch";
import List from "./components/list/List";
import Search from "./components/search/Search";
import "./app.css";

function App() {
	const [results, setResults] = useState([]);

	const handleSearch = (e) => {
		const query = e.target.value;
		if (query.length < 2) return;

		axios.get("https://api.frontendeval.com/fake/food/" + query).then((res) => {
			setResults(res.data);
			console.log(results);
		});
	};

	let searchResults = useHandleSearch(e.target.value);

	const addItem = (item) => {
		console.log(item);
	};

	return (
		<div className="App">
			<Search handleSearch={useHandleSearch} />
			<List results={results} addItem={addItem} />
		</div>
	);
}

export default App;
