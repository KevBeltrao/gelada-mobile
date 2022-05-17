import api from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authenticate = async (
  email: string,
  password: string,
): Promise<{
  idToken: {
    jwtToken: string;
    payload: {
      email: string;
      name: string;
      phone_number: string;
    };
  };
}> => {
  const { data } = await api.post('/auth/login', {
    email: email,
    password: password,
  });

  AsyncStorage.setItem('accessToken', data.accessToken.jwtToken);
  AsyncStorage.setItem('idToken', data.idToken.jwtToken);
  AsyncStorage.setItem('userName', data.idToken.payload.name);
  AsyncStorage.setItem('userPhone', data.idToken.payload.phone_number);
  AsyncStorage.setItem('userEmail', data.idToken.payload.email);

  return data;
};
