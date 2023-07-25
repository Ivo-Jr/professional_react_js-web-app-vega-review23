import styled from 'styled-components';

export const BenefitContent = styled.li`
  display: flex;
  justify-content: center;
  align-items: start;

  flex-direction: column;

  width: 100%;
  max-width: 356px;
  min-width: 300px;

  margin: 10px;

  /* opacity: 0; */

  @media only screen and (min-width: 1900px){
    margin: 20px
  }
`;

export const BenefitImg = styled.img`
  width: 48px;
  height: 48px;

  margin-bottom: 16px;
`;

export const BenefitSubtitle = styled.h4`
  width: 100%;
  /* min-width: 300px; */

  margin-bottom: 16px;

  color: var(--color-white);
  font-weight: bold;
  font-size: 2.8rem;
  line-height: 38px;
  
  @media only screen and (max-width: 470px){
    font-size: 2.3rem;
  }

  @media only screen and (min-width: 1900px){
    font-size: 3.1rem;
    line-height: 38px;
  }
`;

export const BenefitDescription = styled.p`
  width: 100%;
  max-width: 348px;

  color: var(--color-gray);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 26px;
  
  @media only screen and (max-width: 470px){
    font-size: 1.4rem;
  }
  
  @media only screen and (min-width: 1900px){
    line-height: 3rem;
    font-size: 1.9rem;
  }
`;