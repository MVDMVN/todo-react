import React from "react";
import classNames from "classnames";
import TextInput from "./TextInput";
class Task extends React.Component {
  onCheckboxToggle = () => {
    this.props.onDoneTask(this.props.item.id);
  };
  render() {
    return (
      <li
        className={classNames("tasks__item", {
          done: this.props.item.isDone,
        })}>
        <div className="item__input">
          <input
            className="item__checkbox"
            type="checkbox"
            value={this.props.item.isDone}
            checked={this.props.item.isDone}
            onChange={this.onCheckboxToggle}
          />
          {this.props.item.isEditable ? (
            <TextInput
              className="item__edit"
              value={this.props.item.text}
              onBlur={this.props.itemInputChangeText}
              onEnter={this.props.itemInputChangeText}
            />
          ) : (
            <span
              className="item__text"
              onDoubleClick={this.props.onEditTaskOnDoubleClick(
                this.props.item.id,
              )}>
              {this.props.item.text}
            </span>
          )}
        </div>
        <button
          className="item__button"
          onClick={() => {
            this.props.onDeleteTask(this.props.item.id);
          }}>
          Delete
        </button>
      </li>
    );
  }
}

export default Task;
