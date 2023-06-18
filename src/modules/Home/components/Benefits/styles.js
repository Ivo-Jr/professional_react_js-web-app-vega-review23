import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0%{
    transform: translate(0px, 30px);
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

export const Container = styled.section`
  display: flex;
  align-items: center;

  flex-direction: column;

  position: relative;

  width: 100%;
  
  padding: 160px 0px;

  background: #0C0D0F;

  hr {
    bottom: 0;
    height: 1px;
    width: 100%;
    border: none;
    position: absolute;
    background: radial-gradient(#3D3D40 10%, var(--color-background));
  }
`;

export const TitleBenefit = styled.h3`
  font-size: 48px;
  line-height: 54px;
  text-align: center;
  color: var(--color-gray);
`;

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;

  width: 100%;
  max-width: 1150px;

  margin-top: 70px;
 

  /* li:nth-child(1) {
    animation: ${fadeIn} 1s forwards;
    animation-delay: 1s;
  }
  
  li:nth-child(2) {
    animation: ${fadeIn} 1s forwards;
    animation-delay: 1.2s;
  }
 
  li:nth-child(3) {
    animation: ${fadeIn} 1s forwards;
    animation-delay: 1.3s;
  }

  li:nth-child(4) {
    animation: ${fadeIn} 1s forwards;
    animation-delay: 1.5s;
  }

  li:nth-child(5) {
    animation: ${fadeIn} 1s forwards;
    animation-delay: 1.6s;
  }

  li:nth-child(6) {
    animation: ${fadeIn} 1s forwards;
    animation-delay: 1.7s;
  } */
`;
