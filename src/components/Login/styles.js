import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  background: #333;
  width: 100%;
  
  margin: 0px;
  padding: 19rem 0rem;

`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 3rem 5rem 3rem;

  img {
    margin-bottom: 2rem;
    width: 23rem;
  }

  @media only screen and (min-width: 1900px){
    img {
      width: 33rem;
    }
  }
`;

export const WelcomeText = styled.h1`
  font-size: 4rem;
  line-height: 4.5rem;
  font-weight: bold;
  color: var(--color-white);

  @media only screen and (min-width: 1900px){
    font-size: 5.5rem;
    line-height: 6rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;

  margin: 1rem 2rem;
  padding: 6rem;
  
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 1);

  @media only screen and (max-width: 450px){
    padding: 4rem;
  }

  @media only screen and (min-width: 1900px){
    width: 520px;
    height: 410px;

    h2 {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    
    input {
      height: 3.5rem;
    }

    .login-button{
      max-width: initial;
      margin-top: 2rem;
    }
  }
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 1rem;
  width: 100%;
  border: 1px solid #cccccc;
  border-radius: 3px;

  height: 5rem;

  margin-bottom: 2rem;
  padding: 0.5rem 2rem;
  
  font-size: 2rem;


  @media only screen and (min-width: 1900px){
    padding: 1rem 4rem;
    font-size: 2.5rem;
    margin-top: 2rem;
    border-radius: 5px;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  color: #ffffff;

  max-width: 30rem;
  width: 100%;

  border: none;
  border-radius: 3px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 1rem;
  padding: 5px 10px;
  padding: 2rem 5rem;

  text-align: center;
  color: var(--color-white);
  font-size: 1.9rem;
  font-weight: 700;
  line-height: 19px;

  background: var(--color-wine);
  transition: .2s ease-in-out;

  cursor: pointer;

  &:hover {
    opacity: .8
  }
`;