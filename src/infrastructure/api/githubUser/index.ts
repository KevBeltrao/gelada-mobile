import api from '../api';

export const detail = async (
  login: string,
): Promise<{
  login: string;
  id: number;
  avatar_url: string;
  repos_url: string;
}> => {
  const { data } = await api.get(`/users/${login}`);

  return data;
};
