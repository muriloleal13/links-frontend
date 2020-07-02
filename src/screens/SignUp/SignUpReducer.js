import { setAccount, setToken, setRefreshToken} from '../../helpers/account';
import { SIGN_UP } from './SignUpActions';

const initialState = {
  account: null,
}

export default function(state = initialState, action){
  const { type, payload } = action;
  switch(type){
    case SIGN_UP:
      const { data: account, metadata} = payload.data;
      const { token, refreshToken } = metadata;
      
      if(account) setAccount(account);
      if(token) setToken(token);
      if(refreshToken) setRefreshToken(refreshToken);

      return { ...initialState, account };
    default:
      return state;
  }
};