import React from "react";
import classNames from "classnames";

function Task(props) {
  return (
    <li
      className={classNames("tasks__item", {
        done: props.item.isDone,
      })}>
      <label className="item__input">
        <input
          className="item__checkbox"
          onChange={() => props.onDoneTask(props.item.id)}
          type="checkbox"
          checked={props.item.isDone}
        />
        <span className="item__text">{props.item.text}</span>
      </label>
      <button
        className="item__button"
        onClick={() => props.onDeleteTask(props.item.id)}>
        Delete
      </button>
    </li>
  );
}

export default Task;
