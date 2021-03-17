import React from "react";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  mainInputTextHandler = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  };

  keyPressedHandler = ({ key }) => {
    if (key === "Enter") {
      this.props.onAddTask(this.state.inputValue);
      this.setState({ inputValue: "" });
    }
  };

  handleOnBlur = () => {
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(this.state.inputValue);
    }
  };

  render() {
    return (
      <input
        className={this.props.className}
        placeholder={this.props.inputPlaceholder}
        value={this.state.inputValue}
        onChange={this.mainInputTextHandler}
        onKeyPress={this.keyPressedHandler}
        onBlur={this.handleOnBlur}
        type="text"
      />
    );
  }
}

export default TextInput;
