import React from 'react';

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

const HeadingH1 = ({ children, className = '' }: HeadingProps) => (
  <h1
    className={`mt-20 mb-14 text-fluid-h3  lg:text-3xl justify-self-center font-semibold text-primary-heading ${className}`}
  >
    {children}
  </h1>
);

export default HeadingH1;
