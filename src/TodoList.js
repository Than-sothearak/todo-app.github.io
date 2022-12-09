import React from "react";

export class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.text.map((item, index) => (
          <li key={item.id}>
            {item.num}. {item.text}
            <button onClick={() => this.props.handleDelete(index)}>Delete</button>
          </li>
        
        ))}
      </ul>
    );
  }
}
