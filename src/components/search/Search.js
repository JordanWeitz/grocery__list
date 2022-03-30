import React from "react";
import "./search.css";

function Search({ useHandleSearch }) {
	return (
		<div className="search">
			<input
				type="text"
				onKeyUp={(e) => useHandleSearch(e)}
				className="search__input"
			/>
		</div>
	);
}

export default Search;
