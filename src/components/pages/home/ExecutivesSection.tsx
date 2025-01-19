import { useState } from 'react';
import { PiArrowCircleUpRightFill } from 'react-icons/pi';

import { Button } from '@/components/shared/Button';
import { CardWrapper } from '@/components/shared/CardWrapper';
import { ExecutivesCard } from '@/components/shared/ExecutivesCard';
import HeadingH1 from '@/components/shared/Heading';
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
    img: '/public/assets/images/gaa.png',
    name: 'Gaffarov Abdulaxat Abdurayimovich',
    position: "Boshqarma boshlig'i",
  },
  {
    img: '/public/assets/images/jim.png',

    name: 'Jakbarov Ibrohim Mamadjonovich',
    position:
      "Namangan viloyati oliy ta'lim, fan va innovatsiyalar boshqarmasi mehnat bozorini tahlili va ish beruvchilar bilan hamkorlik qilish sho'basi mudiri",
  },
  {
    img: '/public/assets/images/pbg.png',

    name: "Pirmatov Botirali G'aybullayevich",
    position:
      'Mehnat bozorini tahlili va ish beruvchilar bilan hamkorlik qilish shoʻbasi bosh mutaxassisi',
  },
  {
    img: '/public/assets/images/xsm.png',

    name: 'Xudoyberdiyev Saydullo Murodillayevich',
    position:
      "Oliy ta'lim, fan va innovatsiyalar vazirligi Namangan viloyati boshqarmasi Mehnat bozorini tahlil va ish beruvchilar bilan hamkorlik qilish sho'basi etakchi mutaxassisi",
  },
  {
    img: '/public/assets/images/rrg.png',

    name: 'Raximov Rashid G’ulomjonovich',
    position:
      'Oliy ta’lim, fan va innovatsiyalar vazirligi Namangan viloyati boshqarmasi Mehnat bozorini tahlili va ish beruvchilar bilan hamkorlik qilish sho‘basi bosh mutaxassisi',
  },
  {
    img: '/public/assets/images/fia.png',

    name: 'Fozilov Ismoil Abdurahimovich',
    position:
      "Oliy ta'lim, fan va innovatsiyalar vazirligi Namangan viloyati hududiy boshqarmasi Ta'lim jarayonini tashkil etish sho'basi mudiri",
  },
  {
    img: '/public/assets/images/ssf.png',

    name: 'Saydaliyev Saydullo Fayzullayevich',
    position: "Ta'lim jarayonini tashkil etish sho'basi Bosh mutaxassisi",
  },
  {
    img: '/public/assets/images/kiu.png',

    name: 'Karimov Ilxomjon Usmonovich',
    position:
      "Oliy ta'lim, fan va innovatsiyalar vazirligi Namangan viloyati hududiy boshqarmasi Ta'lim jarayonini tashkil etish sho'basi etakchi mutaxassisi",
  },
  {
    img: '/public/assets/images/jnm.png',

    name: 'Jurabayev Nodirbek Mamasidiq oʻgʻli',
    position: 'Innovatsion rivojlanish shoʻbasi mudiri',
  },
  {
    img: '/public/assets/images/bjz.png',

    name: 'Borotov Jamshid Zokirjonovich',
    position: 'Ta’lim sifati nazorati bo‘yicha bosh mutaxassis',
  },
  {
    img: '/public/assets/images/xba.png',

    name: 'Xamidov Behzod Abdumalikovich',
    position: 'Innovatsion rivojlanish shoʻbasi bosh mutaxassisi',
  },
  {
    img: '/public/assets/images/sbb.png',

    name: "Sharipov Boburbek Botirali o'g'li",
    position: 'Xorijiy tillarni ommalashtirish bo‘yicha bosh mutaxassis',
  },
  {
    img: '/public/assets/images/ana.png',

    name: 'Abdulhakimov Nodirbek Abdurahimovich',
    position:
      "Oliy ta'lim, fan va innovatsiyalar vazirligi Namangan viloyati hududiy boshqarmasi Texnik ta'minot va ekspuluatsiya bo'yicha bosh mutaxassis",
  },
  {
    img: '/public/assets/images/abm.png',

    name: 'Akbarov Bahodirjon Maxamadolimovich',
    position:
      "Oliy ta'lim, fan va innovatsiyalar vazirligi Namangan viloyati hududiy boshqarmasi bosh hisobchisi",
  },
  {
    img: '/public/assets/images/uma.png',

    name: 'Usmonov Meliboy Abdullayevich',
    position:
      "Oliy ta'lim, fan va innovatsiyalar boshqarmasi Namangan viloyati hududiy boshqarmasi xo'jalik mudiri, kassir",
  },
];
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

export default Executives;
