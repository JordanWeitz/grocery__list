import React from "react";

import "./list.css";

function List({ results, addItem }) {
	return (
		<div className="list">
			{results?.slice(0, 5)?.map((result, i) => {
				return (
					<div className="list__item" key={i} onClick={() => addItem(result)}>
						{result.toUpperCase()}
					</div>
				);
			})}
		</div>
	);
}

export default List;
