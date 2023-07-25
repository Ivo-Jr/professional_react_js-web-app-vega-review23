import styled from 'styled-components';

export const commonStyles = `
  text-align: center;
  color: gray;
  font-weight: none;
  font-size: 1.5em;
  -webkit-animation: fadeinup 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadeinup 2s; /* Firefox < 16 */
  -ms-animation: fadeinup 2s; /* Internet Explorer */
  -o-animation: fadeinup 2s; /* Opera < 12.1 */
  animation: fadeinup 2s;
`;

export const responsiveStyles = `
  @media (max-width: 414px) {
    display: inline;
    height: 100%;
    overflow: hidden;
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  min-height: 100%;

  background: var(--color-background);

  padding: 190px 0px;

`;

export const ContentIntro = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1150px;

  padding: 1rem 3rem;
  margin-bottom: 6rem;

  @media only screen and (min-width: 1900px){
    max-width: 1450px
  }
`;


export const WrapperText = styled.article`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 8rem;

    font-size: 4rem;
    font-weight: bold;
    font-style: normal;
    line-height: 3rem;
    color: var(--color-white);
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    font-style: normal;
    line-height: 2rem;

    text-align: justify;

    color: var(--color-gray);
    filter: brightness(.8);
    
  }

  @media only screen and (min-width: 1900px){
    p{
      font-size: 2.2rem;
      line-height: 3.5rem;
    }
  }
`;

export const CTAButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 200px;
  height: 50px;

  background: var(--color-wine);
  
  border-radius: 6px;
  
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;

    font-size: 1.5rem;
    font-weight: 700;
    line-height: 19px;
    color: var(--color-white);
    text-decoration: none;
    
    border-radius: 6px
  }

  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    filter: brightness(.8)
  }

  @media only screen and (min-width: 1900px){
    width: initial;
    max-width: initial;
    height: initial;
    padding: 2rem 5rem;

    a{
      font-size: 2rem;
    }
  }
`;

export const Image = styled.img`
  max-width: 25%;
  margin-right: 60px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }
`;