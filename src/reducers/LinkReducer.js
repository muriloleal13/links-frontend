import { LINK_CREATE, LINK_EDIT, LINK_DELETE, LINK_LIST, LINK_UPDATE } from '../actions/LinkActions';

const initialState = {
  link: null,
  links: [],
}

export default function(state = initialState, action){
  const { type, payload } = action;
  switch(type){
    case LINK_CREATE:
    case LINK_UPDATE:
    case LINK_LIST:
    case LINK_EDIT:
      const { data: link } = payload.data;
      return { ...state, link };
    case LINK_DELETE:
    default:
      return state;
  }
};