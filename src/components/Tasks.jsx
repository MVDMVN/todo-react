import React from "react";
import Task from "./Task";

class Tasks extends React.Component {
  render() {
    return (
      <ul className="tasks__items">
        {this.props.tasksItems.map((item) => {
          return (
            <Task
              key={item.id}
              tasksItems={this.props.tasksItems}
              item={item}
              onDeleteTask={this.props.onDeleteTask}
              onDoneTask={this.props.onDoneTask}
              onEditTaskOnDoubleClick={this.props.onEditTaskOnDoubleClick}
              itemInputChangeText={this.props.itemInputChangeText}
            />
          );
        })}
      </ul>
    );
  }
}

export default Tasks;
