import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 250px;
  height: 5rem;

  background: var(--color-wine);
  border-radius: 6px;

  text-decoration: none;
    
  text-decoration: none;
  text-align: center;

  color: var(--color-white);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 19px;
  
  a, div {
    display: flex;
    justify-content: center;
    align-items: center;  

    margin: 0;
    padding: 5px 10px;

    height: 100%;
    width: 100%;
    
    text-decoration: none;
    text-align: center;

    color: var(--color-white);


    font-size: 1.6rem;
    font-weight: 700;
    line-height: 19px;
  }

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

    color: var(--color-white)
  }

  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    filter: brightness(.8)
  }

  @media only screen and (min-width: 1900px){
    height: 6rem;

    a{
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
`;