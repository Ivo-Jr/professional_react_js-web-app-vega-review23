import React from 'react';

import { IoIosArrowUp } from 'react-icons/io';
import { ButtonToTop } from './styles';

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <ButtonToTop onClick={scrollToTop}>
      <IoIosArrowUp />
    </ButtonToTop>
  )
}