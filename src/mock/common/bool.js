import { mock, Random } from 'mockjs';
import { output } from './utils';

mock(/mock.bool/, () => {
  return output({
    success: Random.boolean(9, 1, true),
  });
});
