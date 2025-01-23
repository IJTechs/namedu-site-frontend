export const BASE_URL = 'http://localhost:8000/api/v1';

export const API_ENDPOINTS = {
  NEWS: {
    getNews: `${BASE_URL}/news`,
    getNewsById: (news_id: string) => `${BASE_URL}/news/${news_id}`,
  },
};
