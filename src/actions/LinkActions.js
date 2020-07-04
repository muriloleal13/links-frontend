import { apiPost, apiPut, apiDelete, apiGet  } from '../helpers/api';

export const LINK_CREATE = 'LINK_CREATE';
export const LINK_UPDATE = 'LINK_UPDATE';
export const LINK_EDIT = 'LINK_EDIT';
export const LINK_REMOVE = 'LINK_REMOVE';
export const LINK_TO_REMOVE = 'LINK_TO_REMOVE';
export const LINK_LIST = 'LINK_LIST';

export const linkCreate = (data) => {
  const isSocial = !!data.isSocial
  const payload = apiPost('/link', { ...data, isSocial });
  return { type: LINK_CREATE, payload };
};

export const linkUpdate = (id, data) => {
  const isSocial = !!data.isSocial
  const payload = apiPut(`/link/${id}`, { ...data, isSocial });
  return { type: LINK_UPDATE, payload };
};

export const linkList = (data) => {
  const payload = apiGet('/link');
  return { type: LINK_LIST, payload };
};

export const linkEdit = (id) => {
  const payload = apiGet(`/link/${id}`);
  return { type: LINK_EDIT, payload };
};

export const linkRemove = (link) => {
  const payload = apiDelete(`/link/${link.id}`);
  return { type: LINK_REMOVE, payload };
};

export const setLinkToRemove = (link) => {
  return { type: LINK_TO_REMOVE, payload: link };
};
