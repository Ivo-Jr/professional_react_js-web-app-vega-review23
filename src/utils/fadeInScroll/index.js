import React, { useState, useEffect, useCallback } from 'react';

import { Container } from './styles.js'

export const FadeInScroll = ({ children, id, sx, animationDelay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sxProp = { txi: sx?.txi, tyi: sx?.tyi, animationDelay: animationDelay }

  const handleScroll = useCallback(() => {
    const element = document.getElementById(id);
    const react = element?.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if ((react?.top + 70) < viewportHeight) {
      setIsVisible(true);
    }
  }, [id]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return (
    <Container
      id={id}
      visible={isVisible ? 1 : 0}
      sxprop={sxProp}
    >
      {children}
    </Container>
  )
}