import React from "react";
import Task from "./Task";

function Tasks(props) {
  return (
    <ul className="tasks__items">
      {props.tasksItems.map((item) => {
        return (
          <Task
            key={item.id}
            item={item}
            onDeleteTask={props.onDeleteTask}
            onDoneTask={props.onDoneTask}
          />
        );
      })}
    </ul>
  );
}

export default Tasks;
