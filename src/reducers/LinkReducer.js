import { LINK_CREATE, LINK_EDIT, LINK_DELETE } from '../actions/LinkActions';

const initialState = {
  link: null,
}

export default function(state = initialState, action){
  const { type, payload } = action;
  switch(type){
    case LINK_CREATE:
      const { link } = payload.data;
      return { ...state, link };
    case LINK_EDIT:
    case LINK_DELETE:
    default:
      return state;
  }
};