import { apiPost, apiPut, apiGet  } from '../helpers/api';

export const LINK_CREATE = 'LINK_CREATE';
export const LINK_UPDATE = 'LINK_UPDATE';
export const LINK_EDIT = 'LINK_EDIT';
export const LINK_DELETE = 'LINK_DELETE';
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

export const linkDelete = () => {
  return { type: LINK_DELETE, payload: {} };
};
