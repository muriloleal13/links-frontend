import { setAccount, setToken, setRefreshToken, removeAccount, removeToken, removeRefreshToken, getAccount } from '../helpers/account';
import { SIGN_UP, SIGN_IN, SIGN_OUT, INIT_ACCOUNT } from '../actions/AccountActions';

const initialState = {
  account: null,
}

export default function(state = initialState, action){
  const { type, payload } = action;
  switch(type){
    case SIGN_UP:
    case SIGN_IN:
      const { data: account, metadata} = payload.data;
      const { token, refreshToken } = metadata;
      
      if(account) setAccount(account);
      if(token) setToken(token);
      if(refreshToken) setRefreshToken(refreshToken);

      return { ...state, account };
    case SIGN_OUT: {
      removeAccount();
      removeToken();
      removeRefreshToken();
      return { ...state, account: null };
    }
    case INIT_ACCOUNT: {
      const account = getAccount();
      return { ...state, account };
    }
    default:
      return state;
  }
};