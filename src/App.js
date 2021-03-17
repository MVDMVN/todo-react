import React from "react";
import uuid from "react-uuid";
import "./App.scss";
import Tasks from "./components/Tasks";
import TextInput from "./components/TextInput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksItems: JSON.parse(localStorage.getItem("tasksItems") || "[]"),
    };
  }

  componentDidUpdate(prevState) {
    if (prevState.tasksItems !== this.state.tasksItems) {
      localStorage.setItem("tasksItems", JSON.stringify(this.state.tasksItems));
    }
  }

  onAddTask = (text) => {
    this.setState({
      tasksItems: [
        ...this.state.tasksItems,
        {
          id: uuid(),
          text,
          isDone: false,
          isEditable: false,
        },
      ],
    });
  };

  onEditTaskOnDoubleClick = (id) => () => {
    this.state.tasksItems.forEach((task) => {
      if (task.id === id) {
        task.isEditable = !task.isEditable;
        this.setState({
          tasksItems: [...this.state.tasksItems],
        });
      }
    });
  };

  itemInputChangeText = (id) => (text) => {
    this.state.tasksItems.forEach((task) => {
      if (task.id === id) {
        task.text = text;
        task.isEditable = !task.isEditable;
        this.setState({
          tasksItems: [...this.state.tasksItems],
        });
      }
    });
  };

  onDoneTask = (id) => {
    this.setState({
      tasksItems: [
        ...this.state.tasksItems.map((task) => {
          if (task.id === id) {
            task.isDone = !task.isDone;
          }
          return task;
        }),
      ],
    });
  };

  onDeleteTask = (id) => {
    this.setState({
      tasksItems: [...this.state.tasksItems.filter((task) => task.id !== id)],
    });
  };

  render() {
    return (
      <div className="todo">
        <h1 className="todo__title">Todo List</h1>
        <TextInput
          className="todo__input"
          placeholder="Task name"
          onAddTask={this.onAddTask}
        />
        <div className="todo__tasks">
          <p className="tasks__title">
            {this.state.tasksItems.length > 0 ? "Tasks:" : "You have no tasks"}
          </p>
          <Tasks
            tasksItems={this.state.tasksItems}
            onDeleteTask={this.onDeleteTask}
            onDoneTask={this.onDoneTask}
            onEditTaskOnDoubleClick={this.onEditTaskOnDoubleClick}
            itemInputChangeText={this.itemInputChangeText}
          />
        </div>
      </div>
    );
  }
}

export default App;
