import * as React from 'react';
import { connect } from 'react-redux';
// import { useDidMount } from 'common/hooks';
import { Table, Card } from 'antd';
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
    const tableProps = {
      dataSource: this.props.todoList.list,
      rowKey: row => row.id,
      columns: [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '标题',
          dataIndex: 'title',
        },
        {
          title: '状态',
          dataIndex: 'finished',
          render: finished => finished ? '已完成' : '未完成',
        },
      ],
    };
    return (
      <Card.default title="待办列表">
        <Table.default {...tableProps} />
      </Card.default>
    );
  }

}
