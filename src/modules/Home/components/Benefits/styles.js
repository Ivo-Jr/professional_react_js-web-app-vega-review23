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
  min-height: calc(100% - 95px);

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
  padding: 0rem 3rem;

  font-size: 4.8rem;
  line-height: 54px;
  text-align: center;
  color: var(--color-gray);

  @media only screen and (max-width: 470px){
    font-size: 3.7rem;
  }

  @media only screen and (min-width: 1900px){
    font-size: 5.3rem;
    line-height: 6.2rem;
  }
`;

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  width: 100%;
  max-width: 1150px;

  margin-top: 70px;
   
  @media only screen and (min-width: 1900px){
    max-width: 1450px;
  }
`;
