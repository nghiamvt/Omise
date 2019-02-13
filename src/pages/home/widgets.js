import { APIGetCreator, APIPostCreator } from 'src/common/api';
import { URL } from 'src/common/constant';
import { createReducer } from 'src/store';
import { showNotification } from 'src/components/modal';
import { createLoadingSelector } from 'src/common/api';

/**
 * 95% of the time, it's only one reducer/actions pair that ever needs
 * their associated actions. It makes more sense for these pieces to be
 * bundled together in an isolated module that is self contained, and
 * can even be packaged easily into a library.
 */

// API Actions
export const loadCharities = APIGetCreator({
  type: 'LOAD_CHARITIES',
  url: URL.CHARITIES,
});

export const loadPayments = APIGetCreator({
  type: 'LOAD_PAYMENTS',
  url: URL.PAYMENTS,
});

export const submitPayment = APIPostCreator({
  type: 'SUBMIT_PAYMENT',
  url: URL.PAYMENTS,
});

export const initHomeData = () => dispatch => {
  return Promise.all([dispatch(loadCharities()), dispatch(loadPayments())]);
};

export const homeLoadingSelector = createLoadingSelector([
  loadCharities().TYPE,
  loadPayments().TYPE,
]);

export const handleSubmitFlow = ({
  charitiesId,
  charitiesName,
  amount,
}) => dispatch => {
  return dispatch(submitPayment({ charitiesId, amount })).then(res => {
    const modalProps = {
      title: charitiesName,
      description: `Thanks for donate ${res.amount} USD`,
    };
    dispatch(showNotification({ id: res.id, modalProps, timeout: 4500 }));
  });
};

const initialState = {
  allDonation: 0,
  charities: [],
};
const reducer = createReducer(initialState, {
  [loadCharities().SUCCESS]: (state, action) => {
    return { ...state, charities: action.payload };
  },
  [loadPayments().SUCCESS]: (state, action) => {
    const payments = action.payload;
    // all donation amount of all charities
    const allDonation = payments.reduce((acc, i) => {
      return i.amount ? acc + i.amount : acc;
    }, 0);
    // sum donation amount of each charity
    const sumAmountByCharity = payments.reduce((acc, i) => {
      const key = i.charitiesId;
      if (!key || !i.amount) return acc;
      return Object.assign({}, acc, { [key]: i.amount + (acc[key] || 0) });
    }, {});
    return { ...state, allDonation, sumAmountByCharity };
  },
  [submitPayment().SUCCESS]: (state, action) => {
    const { charitiesId, amount } = action.payload;
    return {
      ...state,
      allDonation: state.allDonation + amount,
      sumAmountByCharity: {
        ...state.sumAmountByCharity,
        [charitiesId]: amount + (state.sumAmountByCharity[charitiesId] || 0),
      },
    };
  },
});
export default reducer;
