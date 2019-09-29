import { queryGoods, removeGoods, addGoods, updateGoods } from '@/services/api';

export default {
  namespace: 'goods',

  state: {
    data: {
      list: [],
      pagination: {},
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryGoods, payload);
      yield put({
        type: 'save',
        payload: response.result,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addGoods, payload);
      yield put({
        type: 'save',
        payload: response.result,
      });
      if (callback) callback();
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeGoods, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateGoods, payload);
      yield put({
        type: 'save',
        payload: response.result,
      });
      if (callback) callback();
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
