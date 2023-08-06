import styled, { keyframes } from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: 100%;
  display: flex;
`;

export const Content = styled.section`
  width: 100%;
  padding: 190px 0px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-image: url(${({ imgprops }) => imgprops});
  background-repeat: no-repeat;
  background-size: cover;

  z-index: 1;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;
    opacity: .4;
    z-index: -1;

    background: radial-gradient(black, transparent);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(0px, 30px);
  }
  to {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;

export const Title = styled.h1`
  width: 100%;
  max-width: 900px;
  height: auto;

  margin-bottom: 2rem;
  
  text-align: center;
  font-size: 4.6rem;
  line-height: 6rem;
  
  color: var(--color-white);

  animation: ${fadeIn} 1s ease forwards;

  @media only screen and (max-width: 899px){
    padding: 0rem 3rem;
  }

  @media only screen and (max-width: 590px){
    font-size: 4rem;
    margin-bottom: 3.5rem;
  }

  @media only screen and (min-width: 1900px){
    max-width: 1000px;

    margin-bottom: 4rem;

    font-size: 6rem;
    line-height: 7rem;
  }
`;

export const SubTitle = styled.h2`
  width: 100%;
  max-width: 885px;
  
  margin-bottom: 50px;
  
  color: var(--color-gray);
  font-size: 15px;
  line-height: 26px;
  font-weight: 500;
  text-align: center;

  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: .5s;

  @media only screen and (max-width: 899px){
    padding: 0rem 3rem;
  }

  @media only screen and (max-width: 590px){
    font-size: 1.4rem;
    line-height: 2.3rem;
  }

  @media only screen and (min-width: 1900px){
    max-width: 1300px;
    margin-bottom: 7.5rem;
    font-size: 2.2rem;
  }
`;

export const WhatsApp = styled.a`
  position: fixed;
  bottom: 35px;
  right: 20px;

  width: 55px;
  height: 55px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  padding: 3px;
  
  background: var(--color-green);
  
  opacity: 0;
  cursor: pointer;
  transition: all .3s ease;

  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 1.3s;

  z-index: 999;
  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.3);

  img{
    width: 39px;
    height: 39px;
  }

  &:hover{
    bottom: 40px;
  }
  
  @media only screen and (max-width: 899px){
    font-size: 1.4rem
  }

  @media only screen and (max-width: 800px){
    visibility: hidden
  }
`;

export const CTAButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 2rem;

  background: var(--color-wine);
  
  color: var(--color-white);
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;

  border-radius: 6px;

  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 1s;


  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 30px;
    height: 30px;

    margin-left: 1rem;
    padding: 3px;

    background: var(--color-darkWine);

    border-radius: 4px;
  }

  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    filter: brightness(.8)
  }

  @media only screen and (min-width: 1900px){
    padding: 3rem 5rem;
    font-size: 2.5rem;
  }
`;

