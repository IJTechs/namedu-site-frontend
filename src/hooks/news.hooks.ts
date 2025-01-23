import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/query-keys';
import { INews } from '@/requests/news.requests';
import { getNewsServices, getNewsByIdServices } from '@/services/news.service';

/**
 * Custom hook to fetch all news
 * @returns {object} query object containing data, error, loading state, etc.
 */
export const useGetNews = () => {
  return useQuery<INews[], Error>({
    queryKey: [QUERY_KEYS.NEWS.ALL],
    queryFn: getNewsServices,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};

/**
 * Custom hook to fetch news by ID
 * @param {string} news_id - The ID of the news article to fetch
 * @returns {object} query object containing data, error, loading state, etc.
 */
export const useGetNewsById = (news_id: string) => {
  return useQuery<INews, Error>({
    queryKey: QUERY_KEYS.NEWS.DETAILS(news_id),
    queryFn: () => getNewsByIdServices(news_id),
    enabled: !!news_id,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: true,
  });
};
