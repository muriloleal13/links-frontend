import { LINK_CREATE, LINK_EDIT, LINK_REMOVE, LINK_LIST, LINK_UPDATE, LINK_TO_REMOVE } from '../actions/LinkActions';

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
    case LINK_TO_REMOVE:
      return { ...state, linkToRemove: payload}
    case LINK_REMOVE:
      const links = state.link.filter((link) => link.id !== state.linkToRemove.id);
      return { ...state, linkToRemove: null, links }
    default:
      return state;
  }
};