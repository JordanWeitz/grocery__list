import React from "react";
import "./counter.css";

function Counter({ searchEmpty, value }) {
	return (
		<div className="counter">
			<div
				className={`counter__value ${
					searchEmpty ? "counter__value__none" : ""
				}`}
			>
				{value}
			</div>
		</div>
	);
}

export default Counter;
