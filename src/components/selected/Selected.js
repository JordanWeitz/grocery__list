import React from "react";
import SelectedItem from "../selectedItem/SelectedItem";
import "./selected.css";

function Selected({ selected, removeItem }) {
	return (
		<div className="selected">
			{selected.map((item) => (
				<SelectedItem item={item} key={item} removeItem={removeItem} />
			))}
		</div>
	);
}

export default Selected;
