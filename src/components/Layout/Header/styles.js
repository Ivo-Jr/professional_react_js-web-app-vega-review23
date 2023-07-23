import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: ${props => props.$initialposition ? 'initial' : 'fixed' };
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: 95px;
  width: 100%;
  
  padding: .625rem 2.625rem 0rem 2.625rem;

  transition: all .4s ease;

  background: transparent;
  border-bottom: none;
  
  ${props => props.scroll ?
    css`
      background: var(--color-background);
      border-bottom: 1px solid #3D3D40;
    `
    : css`
      background: transparent;
      border-bottom: none;
    `
  }

  z-index: 6;

  /* @media (max-width: 414px) { */
    /* width: 100%; */
    
    /* overflow: hidden */
    /* flex-direction: column; */
    /* background-color: red; */
  /* } */
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: .625rem;

  max-width: 150px;
  width: 100%;

    img {
      width: 150px;
      &:hover{
      transform: scale(1.05);
      opacity: 20;
      transition: 1s;
    }
  }

  @media (max-width: 414px){
      #logo {
          width: 100%;
          justify-content: center;
          margin-left: 75px;
          height: 100%;
      }
  }
`;

export const CenterSide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 785px;
    width: 100%;

    height: 100%;

    padding: 0px 1rem;

    font-size: 14px;

    
    a {
      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;

      height: 100%;
      width: fit-content;

      margin: 0rem 0.4rem;

      color: var(--color-white);
      font-weight: bold;
      text-decoration: none;

      opacity: .6;

      white-space: nowrap; 
      /* overflow: hidden;  */
      /* text-overflow: ellipsis;  */

      transition: all 0.3s ease;
      
      &:hover{
        opacity: 1;

        border-bottom: 2px solid var(--color-wine);
      }

    }


    /* @media (max-width: 414px) {
        width: 100%;
        margin-right: 0;
        justify-content: center;
    } */
    @media (max-width: 1300px) {
        /* width: 100%; */
        /* background-color: red; */
        /* margin-right: 80px; */
        /* justify-content: center; */
    }

    @media (max-width: 414px) {
    position: fixed;
    top: 0;
    left: ${(props) => (props.menuopen ? '0' : '-100%')};
    width: 75%; 
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-background);
    transition: left 0.3s;
    font-size: 24px;
    padding-top: 60px;
    gap: 20px;
    z-index: 1000;
  }
`;

export const RightSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    text-decoration: none;

    width: 150px;
    
    padding-bottom: .625rem;

    cursor: pointer;
    transition: all 0.2s ease;

    a {
      display: flex;
      justify-content: center; 
      align-items: center;

      margin: 0px 18px;

      text-decoration: none;
      
      svg {
        width: 15px;
        height: 15px;
        color: var(--color-wine);
      }

      span {
        color: var(--color-white);

        text-transform: uppercase;
        font-size: 13px;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 1.08;
        
        margin-left: 8px;
        white-space: nowrap;
        position: relative;

        &:before {
          content: "";
          background-color: rgba(249, 249, 249);
          border-radius: 0px 0px 4px 4px;
          bottom: -7px;
          height: 2px;
          left: 0;
          opacity: 0;
          position: absolute;
          right: 0;
          transform-origin: left center;
          
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          visibility: hidden;
          width: auto;
        }
      }

      &:hover {
        span:before{
          transform: scaleX(1);
          visibility: visible;
          opacity: 1 !important;
        }
      }
    }


    /* &:hover {
      opacity: 1;
    } */


    /* img { */
      /* width: 45px; */
      /* padding-top: 0px; */
      /* padding-right: 30px; */
      /* @media (max-width: 414px) {
          display: none;
      } */
      /* &:hover{
        transform: scale(1.1);
        opacity: 20;
        transition: 1s;
      } */
    /* } */
/* 
    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    a, button {
        color: var(--color-white);
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

    &:hover{
        transition: opacity .3s;
    }

    span {
        background: var(--color-white);
        color: var(--color-wine);
        padding: 3px 7px;
        border-radius: 50%50%;
        position: relative;
        top: -20px;
        right: 10px;
    }
    
    }
    @media (max-width: 414px) {
    width: 100%;
    justify-content: center;
    img {
      display: none;
    }
  } */
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  color: var(--color-white);

  @media (min-width: 415px) {
    display: none;
  }
`;

export const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;

  width: 34px;
  height: 28px;
  
  position: absolute;
  top: 45px;
  left: 25px;
  
  background: transparent;
  border: none;
  
  cursor: pointer;
  
  span {
    width: 50%;
    height: 0,1px;
    color: var(--color-wine);
    background-color: var(--color-wine);
    transition: all 0.3s;
  }

  &:hover {
    span:nth-child(1) {
      transform: translateY(1px);
    }
    span:nth-child(3) {
      transform: translateY(-1px);
    }
  }

  @media (max-width: 414px) {
    display: flex;
  }
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;

  display: ${({ visible }) => (visible ? 'block' : 'none')};

  @media (min-width: 415px) {
    display: none;
  }
`;