import { useNavigate, useSearchParams } from 'react-router-dom';

import Breadcrumb from '@/components/shared/BreadCrumb';
import ShareNews from '@/components/shared/ShareNews';
import { useGetNews, useGetNewsById } from '@/hooks/news.hooks';
import { formatDate } from '@/utils/format-date';
import { Card } from '@/components/shared/NewsCard';
import { useEffect } from 'react';
import { ROUTE_PATHS } from '@/constants/route.paths';

const NewsPage = () => {
  const navigate = useNavigate();
  const { data: allNews } = useGetNews();

  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const { data: news } = useGetNewsById(id!);

  const { title, content, postedAt } = news || {};

  useEffect(() => {
    if (id) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [id]);

  const handleNavigate = (news_id: string, news_title: string) => {
    const formattedTitle = news_title.toLowerCase().replace(/\s+/g, '-');
    if (id === news_id) {
      navigate(`/${ROUTE_PATHS.NEWS_DETAILS}/${formattedTitle}?id=${news_id}`, {
        replace: true,
      });
    } else {
      navigate(`/${ROUTE_PATHS.NEWS_DETAILS}/${formattedTitle}?id=${news_id}`);
    }
  };

  return (
    <div className="min-h-screen h-max max-w-5xl w-full mx-auto relative  p-4 sm:p-6 md:p-8">
      <div className="relative -top-10 w-full flex flex-col gap-6">
        {/* News Title */}
        <div className="w-full bg-white h-[60px] sm:h-[80px] rounded-12 flex items-center justify-center text-lg sm:text-xl md:text-2xl text-primary-heading font-semibold shadow-sm">
          <h1 className="text-center px-4">{title}</h1>
        </div>

        {/* Breadcrumb */}
        <div className="mt-3 sm:my-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <Breadcrumb nonClickableSegments={['yangilik']} />
          <span className="text-xs sm:text-sm font-extralight text-gray-400 flex-shrink-0">
            {postedAt && formatDate(postedAt)}
          </span>
        </div>

        {/* News Content */}
        <div className="text-justify leading-relaxed font-light text-base sm:text-lg md:text-xl h-full  p-4 sm:p-6 md:p-8 rounded-12 ">
          <p>{content}</p>
        </div>

        {/* Separator */}
        <span className="w-full h-[1px] bg-gray-200 shadow-sm"></span>

        {/* Share News Section */}
        <div className="w-full">
          <ShareNews newsTitle={title || ''} newsUrl={window.location.href} />
        </div>
      </div>

      {/* Other News Section */}
      <>
        {allNews && allNews?.length > 1 && (
          <div className="my-20 ">
            <h2 className="text-xl font-semibold text-primary-heading mb-4">
              Yangiliklar
            </h2>
            <div className="overflow-x-scroll scrollbar-hide  ">
              <div className="flex gap-4 w-max  m-4">
                {allNews
                  ?.filter((item) => item._id !== id)
                  .map((data, index) => (
                    <Card
                      key={index}
                      data={data}
                      onClickMore={handleNavigate}
                      cardClassName="w-[330px]"
                    />
                  ))}
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default NewsPage;
