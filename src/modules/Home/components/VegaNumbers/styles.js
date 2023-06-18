import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
  
  width: 100%;
  height: 80vh;

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
  max-width: 1150px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-bottom: 80px;
`;

export const Title = styled.h4`
  font-size: 48px;
  line-height: 54px;
  font-weight: 700;
  color: var(--color-gray);
`;

export const ImgTitle = styled.img`
  width: 250px;
`;

export const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 1150px;
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


`;