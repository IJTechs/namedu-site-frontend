import { getNews, getNewsById } from '@/requests/news.requests';
import { INews } from '@/requests/news.requests';

/**
 * Fetch all news articles.
 * @returns {Promise<INews[]>} - Array of news data.
 */
export const getNewsServices = async (): Promise<INews[]> => {
  try {
    const { data } = await getNews();
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw new Error('Failed to fetch news. Please try again later.');
  }
};

/**
 * Fetch a single news article by ID.
 * @param {string} news_id - The ID of the news article.
 * @returns {Promise<INews>} - Single news item.
 */
export const getNewsByIdServices = async (news_id: string): Promise<INews> => {
  try {
    const { data } = await getNewsById(news_id);
    return data;
  } catch (error) {
    console.error(`Error fetching news with ID ${news_id}:`, error);
    throw new Error('Failed to fetch news details. Please try again later.');
  }
};
