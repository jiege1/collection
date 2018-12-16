import React from 'react';
import TodoList from 'containers/todoList';

export default class Home extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}