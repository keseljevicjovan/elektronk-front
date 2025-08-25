import apiRequest from './apiRequest';

export const fetchImages = async () => {
  const data = await apiRequest('get', '/api/images');
  return Array.isArray(data) ? data : data.data || [];
};
