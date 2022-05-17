import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://geladaapi-env.eba-2wph8ii2.us-east-2.elasticbeanstalk.com/',
});

export const logout = async () => {
  await AsyncStorage.removeItem('accessToken');
  await AsyncStorage.removeItem('idToken');
  await AsyncStorage.removeItem('userName');
  await AsyncStorage.removeItem('userPhone');
  await AsyncStorage.removeItem('userEmail');
};

api.interceptors.request.use(async (request) => {
  const token = await AsyncStorage.getItem('idToken');

  if (request.headers)
    request.headers.Authorization = token ? `Bearer ${token}` : '';

  return request;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      logout();
    }

    throw error;
  },
);

export default api;
