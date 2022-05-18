import api from '../api';

interface Match {
  goalsA: number;
  goalsB: number;
  ownerId: unknown;
  isActive: boolean;
  _id: unknown;
}

export const listMatches = async (): Promise<Match[]> => {
  const { data } = await api.get('/matches');

  return data;
};

export const createMatch = async (): Promise<Match> => {
  const { data } = await api.post('/matches');

  return data;
};

export const detailMatches = async (matchId: string) => {
  const { data } = await api.get(`/matches/${matchId}`);

  return data;
};

export const updateMatches = async (
  matchId: string,
  matchInfo: {
    goalsA: number;
    goalsB: number;
    isActive: boolean;
  },
): Promise<Match> => {
  const { data } = await api.put(`/matches/${matchId}`, matchInfo);

  return data;
};
