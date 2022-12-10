import React from "react";
import { TodoList } from "./TodoList";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    //can't submit without input
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      num: this.state.items.length +1
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
  handleDelete(index) {
    alert("Deteted");
    const newItem = this.state.items;
    newItem.splice(index, 1);
    this.setState(newItem);
  }

  render() {
    return (
      <div className="main">
        <div className="header">
          <h3>TODO</h3>
          <div classname="label" htmlFor="new-todo">
            <h2>What need to be done?</h2>
          </div>
          <form className="form" onSubmit={this.handleSubmit}>
            <div></div>
            <div>
              <input
                className="input"
                id="new-todo"
                onChange={this.handleChange}
                value={this.state.text}
              />
            </div>
            <button className="button-add">Add #{this.state.items.length + 1}</button>
          </form>
          <TodoList text={this.state.items} 
                    handleDelete={this.handleDelete} 
          />

        </div>
        <div className="list">
        </div>
      </div>
    );
  }
}
export default Todo;
