
import * as CONST from '../const';

const initState = {
  finishFilter: 'all',
  keyword: '',
  list: [],
};

const reducer = (state = initState, action) => {

  switch (action.type) {
    case CONST.GET_LIST_SUCCESS: {
      return {
        ...state,
        list: action.payload.list,
      };
    }
    // case CONST.NUM_REDUCE: {
    //   return {
    //     number: state.number - 1,
    //   };
    // }
    // case CONST.NUM_RESET: {
    //   return {
    //     number: action.payload.number,
    //   };
    // }
    default: {
      return state;
    }
  }
};

export default reducer;
