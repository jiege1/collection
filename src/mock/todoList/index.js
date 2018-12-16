
import { mock, Random } from 'mockjs';
import { output } from '../common/utils';

const todoList = [
  {
    id: Random.id(),
    title: Random.ctitle(5, 10),
    finished: Random.boolean(),
  },
  {
    id: Random.id(),
    title: Random.ctitle(5, 10),
    finished: Random.boolean(),
  },
  {
    id: Random.id(),
    title: Random.ctitle(5, 10),
    finished: Random.boolean(),
  },
  {
    id: Random.id(),
    title: Random.ctitle(5, 10),
    finished: Random.boolean(),
  },
];

mock(/mock.getTodoList/, () => {

  return output({
    list: todoList,
  });

});
