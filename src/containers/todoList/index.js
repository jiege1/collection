import * as React from 'react';
import { connect } from 'react-redux';
// import { useDidMount } from 'common/hooks';
import * as actions from './model/actions';

@connect(
  (state) => ({
    todoList: state.todoList,
  }),
  (dispatch) => ({
    getTodoList: () => dispatch(actions.getList()),
  })
)
export default class TodoList extends React.Component {

  componentDidMount() {
    this.props.getTodoList();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          TodoList
        </div>
      </div>
    );
  }

}
