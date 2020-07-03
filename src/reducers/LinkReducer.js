import { LINK_CREATE, LINK_EDIT, LINK_DELETE, LINK_LIST } from '../actions/LinkActions';

const initialState = {
  link: null,
  links: [],
}

export default function(state = initialState, action){
  const { type, payload } = action;
  switch(type){
    case LINK_CREATE:
      const { link } = payload.data;
      return { ...state, link };
    case LINK_LIST: {
      console.log('*** LinkReducer.payload', payload);
      const { data: links } = payload.data;
      return { ...state, links };
    }
    case LINK_EDIT: {
      const { data: link } = payload.data;
      return { ...state, link };
    }
    case LINK_DELETE:
    default:
      return state;
  }
};