import { motion } from 'framer-motion';
import React from 'react';
import { PiArrowCircleUpRightFill } from 'react-icons/pi';

import { Button } from '@/components/shared/Button';
interface NewsCardProps {
  data: any;
}

const Card: React.FC<NewsCardProps> = ({ data }) => {
  const { img, title, description, date } = data;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="group flex flex-col gap-3 rounded-12 p-[16px] bg-white shadow-card-shadow cursor-pointer"
    >
      <div className="aspect-[4/1] w-full ">
        <img
          src={img}
          alt={title}
          className="object-cover h-[250px]  w-full  rounded-8 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="">
        <h3 className="text-lg leading font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="flex items-center justify-between ">
        <p className="text-sm text-neutral-600">{date}</p>
        <Button variant={'icon'} size={'icon'} className=" text-sm">
          Batafsil <PiArrowCircleUpRightFill />
        </Button>
      </div>
    </motion.div>
  );
};

export { Card };
