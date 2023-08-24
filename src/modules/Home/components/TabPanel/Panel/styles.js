import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(0px, 10px);
  }
  to {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;

export const Container = styled.div`
  display: flex;
  opacity: 0;

  ${props => props.color && css`
    animation: ${fadeIn} .5s ease forwards;
  `}

  @media only screen and (max-width: 899px){
    flex-wrap: wrap
  }
`;


export const SideLeft = styled.article`
  padding: 25px 10px 0px 0px;

  width: 100%;
  max-width: 560px;

  @media only screen and (max-width: 899px){
    max-width: auto;
  }
  
  @media only screen and (min-width: 1900px){
    padding: 35px 10px 0px 0px;
    max-width: 650px;
  }
`;

export const Subtitle = styled.h4`
  max-width: 445px;
  
  margin-bottom: 24px;

  font-size: 32px;
  line-height: 36px;
  color: var(--color-white);

  @media only screen and (max-width: 899px){
    max-width: 100%;
  }
  
  @media only screen and (max-width: 590px){
    font-size: 2.5rem;
  }
  
  @media only screen and (min-width: 1900px){
    max-width: 530px;
    margin-bottom: 3.5rem;
    font-size: 4rem;
    line-height: 5rem;
  }
`;

export const Description = styled.p`
  width: 100%;
  max-width: 530px;

  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--color-gray);

  @media only screen and (max-width: 899px){
    max-width: 100%;
  }

  @media only screen and (max-width: 590px){
    font-size: 1.4rem;
  }

  @media only screen and (min-width: 1900px){
    max-width: 530px;
    font-size: 2.2rem;
    line-height: 3rem;
  }
`;

export const CTAButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* width: 100%;
  max-width: 210px;
  height: 56px; */
  width: max-content;
  padding: 1rem 3rem;

  margin: 32px 0px 60px 0px;

  font-size: 14px;
  font-weight: 700;
  line-height: 26px;
  text-transform: uppercase;
  
  border-radius: 5px;
  
  background: ${props => props.color};
  
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;

    border-radius: 5px;

    text-decoration: none;
    color: var(--color-white);
    
      ${props => props.color === "#42d3ff"
    && css`
          background: color;
          color: black;
        `
  }
  }

  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    margin-left: 5px;
    width: 20px;
    height: 20px;
  }

  &:hover {
    filter: brightness(.8)
  }

  @media only screen and (max-width: 590px){
    a{
      font-size: 1.2rem;
    }
  }

  @media only screen and (min-width: 1900px){
    padding: 3rem 5rem;
    font-size: 2.2rem;
    width: max-content;
    margin: 5rem 0px 60px 0px;
  }
`;

export const Testimony = styled.div`
  font-style: italic;
  max-width: 520px;
  
  font-size: 16px;
  line-height: 26px;
  color: var(--color-white);

  @media only screen and (max-width: 899px){
    max-width: 100%;
  }

  @media only screen and (max-width: 590px){
    font-size: 1.4rem
  }

  @media only screen and (min-width: 1900px){
    font-size: 1.8rem;
    max-width: 580px;
    margin-bottom: 2rem;
  }
`;

export const Person = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 300px;
`;

export const Avatar = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px;
  margin: 20px 15px 20px 0px;

  width: 25%;

  border-radius: 50%;
  background: 
    radial-gradient(rgba(0,0,0,0.15) 60%, transparent 0),
    radial-gradient( #000 67%, transparent 0),
    ${props => props.color};
    

  img {
    width: 100%;
    border-radius: 50%;
  }

  @media only screen and (min-width: 1900px){
    margin: 20px 25px 20px 0px;
    width: 35%;
  }
`;

export const PersonInfo = styled.aside`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 120px;

  @media only screen and (max-width: 899px){
    max-width: 540px;
  }
`;

export const Name = styled.h4`
  font-size: 1.6rem;
  line-height: 26px;
  color: var(--color-gray);
  font-weight: 700;

  @media only screen and (max-width: 599px){
    font-size: 1.4rem;
  }

  @media only screen and (min-width: 190px){
    font-size: 2.3rem;
  }

`;

export const Occupation = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  color: var(--color-gray);
  max-width: 206px;

  @media only screen and (max-width: 599px){
    font-sizE: 1.2rem;
  }

  @media only screen and (min-width: 1900px){
    font-size: 2rem;
  }
`;

export const SideRight = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 20px;

  img {
    width: 100%;
  }
`;

