import React from "react";
import "./search.css";

function Search({ handleSearch, searchEmpty }) {
	return (
		<div className="search">
			<input
				type="text"
				onKeyUp={(e) => handleSearch(e)}
				className={`search__input ${searchEmpty ? "search__input__empty" : ""}`}
			/>
		</div>
	);
}

export default Search;
