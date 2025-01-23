import { AxiosResponse } from 'axios';

import API from '@/api/axios.instance';
import { API_ENDPOINTS } from '@/constants/api-endpoints';

export interface INews {
  _id: string;
  title: string;
  content: string;
  image: string;
  postedAt: Date | string;
  readTime: number;
  views: number;
  socialLinks: Record<string, string>;
  author: string;
}

/**
 *Fetches all news data.
 * @returns {Promise<AxiosResponse<INews[]>>} - Array of news data.
 */
export const getNews = async (): Promise<AxiosResponse<INews[]>> => {
  return API.get<INews[]>(API_ENDPOINTS.NEWS.getNews);
};

/**
 * Fetches a single news article by ID.
 * @param {string} news_id - The ID of the news article.
 * @returns {Promise<AxiosResponse<INews>>} - Single news item.
 */
export const getNewsById = async (
  news_id: string
): Promise<AxiosResponse<INews>> => {
  return API.get<INews>(API_ENDPOINTS.NEWS.getNewsById(news_id));
};
