import { APIGetCreator } from '../../store/callApi';
import { URL } from 'src/common/constant';
import { createReducer } from 'src/store';

/**
 * 95% of the time, it's only one reducer/actions pair that ever needs
 * their associated actions. It makes more sense for these pieces to be
 * bundled together in an isolated module that is self contained, and
 * can even be packaged easily into a library.
 */

export const loadCharities = APIGetCreator({
  type: 'LOAD_CHARITIES',
  url: URL.GET_CHARITIES
});

export const loadPayments = APIGetCreator({
  type: 'LOAD_PAYMENTS',
  url: URL.GET_PAYMENTS
});

export const initHomeData = () => dispatch => {
  return Promise.all([dispatch(loadCharities()), dispatch(loadPayments())]);
};

const reducer = createReducer([], {
  [loadCharities().SUCCESS]: (state, action) => {
    return { ...state, charities: action.payload };
  },
  [loadPayments().SUCCESS]: (state, action) => {
    const payments = action.payload;
    // all donation amount of all charities
    const allDonation = payments.reduce((acc, i) => {
      return i.amount ? (acc += i.amount) : acc;
    }, 0);
    // sum donation amount of each charity
    const sumAmountByCharity = payments.reduce((acc, i) => {
      const key = i.charitiesId;
      if (!key || !i.amount) return acc;
      return Object.assign({}, acc, {
        [key]: acc[key] ? acc[key] + i.amount : i.amount
      });
    }, {});
    return { ...state, allDonation, sumAmountByCharity };
  }
});
export default reducer;
