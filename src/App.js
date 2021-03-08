import React from "react";
import "./App.scss";
import Tasks from "./components/Tasks";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksItems: [],
      inputValue: "",
    };
    this.state.tasksItems = JSON.parse(
      localStorage.getItem("tasksItems") || "[]",
    );
  }

  componentDidUpdate(prevState) {
    if (prevState.tasksItems !== this.state.tasksItems) {
      localStorage.setItem("tasksItems", JSON.stringify(this.state.tasksItems));
    }
  }

  inputTaskTextHandler = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  keyPressedHandler = (event) => {
    if (event.key === "Enter" && this.state.inputValue.trim() !== "") {
      this.setState({
        tasksItems: [
          ...this.state.tasksItems,
          {
            id: Date.now(),
            text: this.state.inputValue,
            isDone: false,
          },
        ],
      });
      this.setState({ inputValue: "" });
    }
  };

  onDoneTask = (id) => {
    this.state.tasksItems.forEach((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
        this.setState({
          tasksItems: [...this.state.tasksItems],
        });
      }
    });
    console.log(this.state.tasksItems);
  };

  onDeleteTask = (id) => {
    this.setState({
      tasksItems: [...this.state.tasksItems.filter((item) => item.id !== id)],
    });
    console.log(this.state.tasksItems);
  };

  render() {
    return (
      <div className="todo">
        <h1 className="todo__title">Todo List</h1>
        <input
          className="todo__input"
          value={this.state.inputValue}
          onChange={this.inputTaskTextHandler}
          onKeyDown={this.keyPressedHandler}
          type="text"
          placeholder="Task name"
        />
        <div className="todo__tasks">
          <p className="tasks__title">
            {this.state.tasksItems.length > 0 ? "Tasks:" : "You have no tasks"}
          </p>
          <Tasks
            tasksItems={this.state.tasksItems}
            onDeleteTask={this.onDeleteTask}
            onDoneTask={this.onDoneTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
