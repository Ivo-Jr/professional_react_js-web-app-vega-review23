import styled, { css, keyframes } from 'styled-components';

const fadeIn = ({ txi = '0px', tyi = '0px' }) => keyframes`
  0%{
    transform: translate(${txi}, ${tyi});
    opacity: 0;

  }
  50%{
    opacity: .3;
  }
  100%{
    transform: translate(0px, 0px);
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;

  ${({ visible, id }) => visible ?
    id && css`
      /* opacity: 1; */
      /* transition: opacity .5s ease;  */
      
      animation: ${({ sxprop }) => fadeIn(sxprop)} 1s forwards;
      animation-delay: ${({ sxprop }) => `${sxprop.animationDelay}s`};
    `
    :
    id && css`
      opacity:  0;
    `
  }
`;