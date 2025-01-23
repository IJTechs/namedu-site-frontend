import { useState } from 'react';
import { PiArrowCircleUpRightFill } from 'react-icons/pi';

import { Button } from '@/components/shared/Button';
import { CardWrapper } from '@/components/shared/CardWrapper';
import { ExecutivesCard } from '@/components/shared/ExecutivesCard';
import HeadingH1 from '@/components/shared/Heading';

import CustomPagination from '@/components/shared/Pagination';
import { executivesData } from '@/static/executives.static';

const Executives = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const screenWidth = window.innerWidth;
  const initialCardCount =
    screenWidth > 1536
      ? 8
      : screenWidth > 1280
        ? 6
        : screenWidth > 1024
          ? 6
          : 2;

  const cardCount = isShowMore ? initialCardCount : initialCardCount;

  const totalNews = Math.ceil(executivesData.length / cardCount);
  const startIndex = (currentPage - 1) * cardCount;
  const currentNews = executivesData.slice(startIndex, startIndex + cardCount);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleShowMoreToggle = () => {
    setIsShowMore((prev) => !prev);
    setCurrentPage(1);
  };

  return (
    <div
      id="executives"
      className="w-full  transition-height transform duration-300"
    >
      <HeadingH1>Rahbariyat</HeadingH1>
      <CardWrapper>
        {currentNews.map((data, index) => (
          <ExecutivesCard key={index} data={data} />
        ))}
      </CardWrapper>
      {isShowMore && (
        // <Pagination className="mt-10 gap-3">
        //   <PaginationPrevious
        //     onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        //   >
        //     Oldingi
        //   </PaginationPrevious>
        //   <PaginationContent>
        //     {Array.from({ length: totalNews }).map((_, index) => (
        //       <PaginationItem key={index}>
        //         <PaginationLink
        //           className="cursor-pointer"
        //           isActive={currentPage === index + 1}
        //           onClick={() => handlePageChange(index + 1)}
        //         >
        //           {index + 1}
        //         </PaginationLink>
        //       </PaginationItem>
        //     ))}
        //   </PaginationContent>
        //   <PaginationNext
        //     onClick={() =>
        //       currentPage < totalNews && handlePageChange(currentPage + 1)
        //     }
        //   >
        //     Keyingi
        //   </PaginationNext>
        // </Pagination>
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
        className="flex justify-self-end mt-3"
      >
        {isShowMore ? 'Qisqartish' : 'Ko’proq ko’rsatish'}
        <PiArrowCircleUpRightFill />
      </Button>
    </div>
  );
};

export default Executives;
