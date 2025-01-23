export const BASE_URL = 'http://localhost:8000/api/v1';

export const API_URLS = {
  NEWS: {
    GET_NEWS: `${BASE_URL}/news`,
    GET_NEWS_BY_ID: (news_id: string) => `${BASE_URL}/news/${news_id}`,
  },
};
