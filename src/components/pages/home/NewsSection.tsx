import { useState } from 'react';
import { PiArrowCircleUpRightFill } from 'react-icons/pi';

import { Button } from '@/components/shared/Button';
import { CardWrapper } from '@/components/shared/CardWrapper';
import HeadingH1 from '@/components/shared/Heading';
import { Card } from '@/components/shared/NewsCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const newsdata = [
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
  {
    img: 'https://namedu.uz/static/media/news-1.affe499fbfa003377177.jpg',
    title: 'Bizlarni bir maqsad birlashtiradi',
    description:
      'Oliy ta’lim, oliy ta’limdan keyingi ta’lim, ilm-fan va innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni strategik rivojlantirish yo‘nalishlarini belgilash...',
    date: '2023-07-01',
  },
];
const News = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalNews = Math.ceil(newsdata.length / cardCount);
  const startIndex = (currentPage - 1) * cardCount;
  const currentNews = newsdata.slice(startIndex, startIndex + cardCount);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleShowMoreToggle = () => {
    setIsShowMore((prev) => !prev);
    setCurrentPage(1);
  };

  return (
    <div id="news" className="w-full transition-height transform duration-300">
      <HeadingH1>Yangiliklar</HeadingH1>
      <CardWrapper>
        {currentNews.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </CardWrapper>
      {isShowMore && (
        <Pagination className="mt-10 gap-3">
          <PaginationPrevious
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          >
            Oldingi
          </PaginationPrevious>
          <PaginationContent>
            {Array.from({ length: totalNews }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  className="cursor-pointer"
                  isActive={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
          <PaginationNext
            onClick={() =>
              currentPage < totalNews && handlePageChange(currentPage + 1)
            }
          >
            Keyingi
          </PaginationNext>
        </Pagination>
      )}

      <Button
        onClick={handleShowMoreToggle}
        variant="icon"
        className="flex justify-self-end px-24"
      >
        {isShowMore ? 'Qisqartish' : 'Ko’proq ko’rsatish'}
        <PiArrowCircleUpRightFill />
      </Button>
    </div>
  );
};

export default News;
