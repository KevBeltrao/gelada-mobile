import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

api.interceptors.request.use((request) => {
  // TODO request.headers.authentication = validtokenhere;
  return request;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      // TODO logout()
    }

    throw error;
  },
);

export default api;
