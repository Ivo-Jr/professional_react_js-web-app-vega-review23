import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
  
  width: 100%;
  /* height: 80vh; */

  hr {
    bottom: 0;
    height: 1px;
    width: 100%;
    border: none;
    position: absolute;
    background: radial-gradient(#3D3D40 10%, var(--color-background));
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: calc(1150px + 9rem);

  margin: 20rem 0rem;
  padding: 0rem 9rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-bottom: 10rem;

  @media only screen and (max-width: 780px){
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Title = styled.h4`
  width: 100%;
  min-width: 350px;

  font-size: 4.8rem;
  line-height: 54px;
  font-weight: 700;
  color: var(--color-gray);

  @media only screen and (max-width: 780px){
    flex-wrap: wrap;
    text-align: center;
    padding: 0rem 3rem;
    margin-bottom: 3rem;
  }
`;

export const ImgTitle = styled.img`
  width: 250px;
`;

export const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
  max-width: 1150px;

  @media only screen and (max-width: 691px){
    justify-content: center;
  }

`;

export const NumbersItem = styled.li`
  width: 100%;
  max-width: 256px;
  
  div {
    display: flex;
    position: relative;

    font-size: 56px;
    line-height: 64px;
    
    color: var(--color-white);
    font-weight: 700;
    padding-bottom: 16px;

    span {
      color: #4863f7;
    } 
  }
  
  hr {
    bottom: 0;
    height: 3px;
    width: 100%;
    border: none;
    position: absolute;
    /* background: radial-gradient(circle at bottom, #f00, #00f); */
    background: linear-gradient( 0.25turn, var(--color-wine) 20%, #4863f7, var(--color-background));
  }

  p {
    width: 100%;
    max-width: 256px;

    padding-top: 32px;

    font-weight: 400;
    color: var(--color-gray);
    font-size: 18px;
    line-height: 28px;
  }

  @media only screen and (max-width: 691px){
    margin-bottom: 5rem;
  }
`;