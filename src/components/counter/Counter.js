import React from "react";
import "./counter.css";

function Counter({ value }) {
	return (
		<div className="counter">
			<div
				className={`counter__value ${
					value === 0 ? "counter__value__none" : ""
				}`}
			>
				{value}
			</div>
		</div>
	);
}

export default Counter;
