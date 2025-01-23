import React, { useState } from 'react';
import { PiArrowCircleUpRightFill } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/shared/Button';
import { CardWrapper } from '@/components/shared/CardWrapper';
import HeadingH1 from '@/components/shared/Heading';
import { Card } from '@/components/shared/NewsCard';
import { useGetNews } from '@/hooks/news.hooks';
import { ROUTE_PATHS } from '@/constants/route.paths';
import CustomPagination from '@/components/shared/Pagination';

const News = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: news } = useGetNews();

  const navigate = useNavigate();

  const handleNavigate = (news_id: string, title: string) => {
    const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/${ROUTE_PATHS.NEWS_DETAILS}/${formattedTitle}?id=${news_id}`);
  };

  const screenWidth = window.innerWidth;
  const initialCardCount =
    screenWidth > 1536
      ? 4
      : screenWidth > 1280
        ? 3
        : screenWidth > 1024
          ? 3
          : 2;
  const cardCount = isShowMore ? initialCardCount * 2 : initialCardCount;
  const totalNews = news ? Math.ceil(news?.length / cardCount) : 0;
  const startIndex = (currentPage - 1) * cardCount;
  const currentNews = news?.slice(startIndex, startIndex + cardCount);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleShowMoreToggle = () => {
    setIsShowMore((prev) => !prev);
    setCurrentPage(1);
  };

  return (
    <>
      {news && news?.length !== 0 && (
        <div
          id="news"
          className="w-full transition-height transform duration-300"
        >
          <HeadingH1>Yangiliklar</HeadingH1>
          <CardWrapper>
            {currentNews?.map((data, index) => (
              <Card key={index} data={data} onClickMore={handleNavigate} />
            ))}
          </CardWrapper>
          {news && news?.length !== 0 && (
            <React.Fragment>
              {isShowMore && (
                <CustomPagination
                  totalPages={totalNews}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              )}

              <Button
                onClick={handleShowMoreToggle}
                variant="icon"
                size={'icon'}
                className="flex justify-self-end mt-3  "
              >
                {isShowMore ? 'Qisqartish' : 'Ko’proq ko’rsatish'}
                <PiArrowCircleUpRightFill />
              </Button>
            </React.Fragment>
          )}
        </div>
      )}
    </>
  );
};

export default News;
