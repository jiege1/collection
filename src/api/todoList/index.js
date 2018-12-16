
import Ajax from 'common/utils/ajax';

export const getList = () => Ajax.query({
  url: 'todoList.getList',
});
