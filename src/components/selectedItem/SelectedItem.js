import React from "react";

import "./selectedItem.css";

import { IconContext } from "react-icons";
import { BsFillDashCircleFill } from "react-icons/bs";

function SelectedItem({ item, removeItem }) {
	return (
		<div className="selected__item">
			<div className="selected__item__X" onClick={() => removeItem(item)}>
				<BsFillDashCircleFill />
			</div>
			<div className="selected__item__name">{item.toUpperCase()}</div>
		</div>
	);
}

export default SelectedItem;
