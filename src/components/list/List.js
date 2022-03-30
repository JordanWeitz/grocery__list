import React from "react";

import "./list.css";

function List({ results, addItem }) {
	return (
		<div className="list">
			{results?.slice(0, 5)?.map((result, i) => {
				console.log(i);
				return (
					<div key={i} onClick={() => addItem(result)}>
						{result}
					</div>
				);
			})}
		</div>
	);
}

export default List;
