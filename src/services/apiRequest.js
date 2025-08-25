const API_HOST = import.meta.env.VITE_API_HOST;

const apiRequest = async (method, endpoint, data = {}, requiresAuth = false) => {
  const url = `${API_HOST}${endpoint}`;
  const headers = {};

  if (requiresAuth) {
    const token = localStorage.getItem('token');
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }

  const fetchOptions = { method, headers };

  if (['post', 'put'].includes(method.toLowerCase())) {
    if (data instanceof FormData) {
      fetchOptions.body = data;
    } else {
      headers['Content-Type'] = 'application/json';
      fetchOptions.body = JSON.stringify(data);
    }
  }

  try {
    const res = await fetch(url, fetchOptions);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('API Request Error:', err);
    throw err;
  }
};

export default apiRequest;

