import React from "react";

import "./selectedItem.css";

import { BsFillDashCircleFill } from "react-icons/bs";

function SelectedItem({ item, removeItem }) {
  const [count, setCount] = React.useState(1);

  const handleCount = (e) => {
    if (e.target.innerText === "+") {
      setCount(count + 1);
    } else if (e.target.innerText === "-") {
      if (count < 2) {
        removeItem(item);
      } else {
        setCount(count - 1);
      }
    }
  };

  return (
    <div className="selected__item">
      <div className="selected__item__X" onClick={() => removeItem(item)}>
        <BsFillDashCircleFill />
      </div>
      <div className="selected__item__name">{item.toUpperCase()}</div>
      <div className="selected__item__buttons__wrapper">
        <button
          className="selected__item__button"
          onClick={(e) => handleCount(e)}
        >
          +
        </button>
        <button
          className="selected__item__button"
          onClick={(e) => handleCount(e)}
        >
          -
        </button>
      </div>
      <span className="selected__item__count">{count}</span>
    </div>
  );
}

export default SelectedItem;
