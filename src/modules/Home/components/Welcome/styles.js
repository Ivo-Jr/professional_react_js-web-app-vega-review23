import styled, { keyframes } from 'styled-components';

export const Container = styled.main`
  width: 100%;
  /* height: calc(100vh - 95px); */
  height: 100vh;

  /* padding-top: 95px; */
  /* position: relative; */
  /* top: 95px; */
`;

export const Content = styled.section`
  width: 100%;
  height: 1000px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-image: url(${({imgprops}) => imgprops});
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

  margin-top: -110px;

  margin-bottom: 20px;
  
  text-align: center;
  font-size: 46px;
  line-height: 60px;
  
  color: var(--color-white);

  animation: ${fadeIn} 1s ease forwards;
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

  z-index: 9999 !important;
  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.3);

  img{
    width: 39px;
    height: 39px;
  }

  &:hover{
    bottom: 40px;
  }
`;

export const CTAButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 200px;
  height: 50px;

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
`;

