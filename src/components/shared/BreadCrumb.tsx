import { ChevronRight } from 'lucide-react';
import React from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';

import { Button } from './Button';

import { cn } from '@/lib/utils';

interface BreadcrumbProps {
  separator?: React.ReactNode;
  homeLabel?: string;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  separator = <ChevronRight className="w-4 h-4 text-black" />,
  homeLabel = 'Home',
  className,
}) => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split('/')
    .filter((segment) => segment);

  const generateBreadcrumbs = () => {
    let path = '';

    return pathSegments.map((segment, index) => {
      path += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      const formattedSegment = segment.replace(/-/g, ' ');
      return (
        <React.Fragment key={path}>
          <li className="flex items-center italic">
            {!isLast ? (
              <Link to={path} className=" hover:underline capitalize italic">
                {formattedSegment}
              </Link>
            ) : (
              <span className="text-gray-700 font-normal capitalize">
                {formattedSegment}
              </span>
            )}
          </li>
          {!isLast && <li className="mx-1">{separator}</li>}
        </React.Fragment>
      );
    });
  };

  return (
    <nav
      aria-label="breadcrumb"
      className={cn('flex items-center gap-3 ', className)}
    >
      <Button
        onClick={() => window.history.back()}
        variant={'icon'}
        size={'icon'}
        className=" text-sm bg-slate-300 w-6 h-6 rounded-6 text-black"
      >
        <FaChevronLeft />
      </Button>
      <ol className="flex items-center space-x-1 text-sm">
        <li>
          <Link to="/" className=" hover:underline italic">
            {homeLabel}
          </Link>
        </li>
        {pathSegments.length > 0 && <li>{separator}</li>}
        {generateBreadcrumbs()}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
