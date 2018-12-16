
import Ajax from 'common/utils/ajax';


const { api } = window.CFG;

export const getList = () => Ajax.query({
  url: api.todoList.getList,
});
