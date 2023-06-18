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

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  ${commonStyles}
  ${responsiveStyles}
`;

export const Button = styled.div`
    /* position: fixed; */
    /* right: 5px; */
    /* top: 15px; */
    /* bottom: 0; */
    padding-bottom: 80px;
    button {
        /* display: grid; */
        /* justify-content: end; */
        color: white;
        background: #F55E34;
        margin-top: 20px;
        margin-left: 0px;
        margin-bottom: -20px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 19px;
        padding-bottom: 19px;
        font-weight: regular;
        font-size: 1.25rem;
        text-decoration: none;
        border: none;
        cursor: pointer;
        border-radius: 0.5rem;
    
    &:hover{
        background-color: #ccc;
        color: black;
        transition: 1s;
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