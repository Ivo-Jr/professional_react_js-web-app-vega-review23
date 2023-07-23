import styled from "styled-components";

export const ImageResultComponent = styled.div`
  display: flex;
  align-items: center; 

  .captures-section{
    article:first-child{
      padding-right: .5rem;
    }
  }
  
  @media only screen and (max-width: 600px) {
    flex-direction:  column;
  }

  @media only screen and (min-width: 801px) {
    display: none
  }

  @media only screen and (min-width: 600px) and (max-width: 800px){
    margin-bottom: .5rem; 
  }
`;

export const CapturedImage = styled.article`
  display: flex;
  align-items: center;

  flex-direction: column;

  width: 100%;
  
  img {
    width: 100%;

    border-radius: 5px;
  }

  @media only screen and (max-width: 800px) {
    img {
      width: 100%;
      max-width: 290px;
    }
  }
`;

export const ResultantImage = styled.article`
  display: flex;
  align-items: center;

  flex-direction: column;

  width: 100%;

  img {
    width: 100%;

    border-radius: 10px;
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px 0px;
`;

export const Title = styled.h2`

  color: var(--color-gray);
  font-size: 2rem;
  
  margin: 0.5rem;
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  flex-direction: column;
  
  height: max-content;
  width: max-content;
  
  padding: 1rem;
  margin: auto .5rem;
  
  border-radius: 5px;
  background: #333;
  
  p {
    font-size: 1.5rem;
    color: var(--color-gray);
  }

  button {
    font-size: 1.3rem;
    padding: 8px 5px;
    margin: 15px 0px 3px;
  }

  @media only screen and (max-width: 600px){
    margin: 1.5rem;
  }

  @media only screen and (max-width: 800px){
    /* margin: auto; */
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 100%;
  width: 200px;
  padding: 5px;

  background: var(--color-wine);
  border-radius: 6px;

  text-decoration: none;
    
  text-decoration: none;
  text-align: center;

  color: var(--color-white);
  font-size: 1rem;
  font-weight: 700;
  line-height: 19px;

  margin: 0;
  padding: 5px;
  border: none;
  

  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    filter: brightness(.8)
  }
`;