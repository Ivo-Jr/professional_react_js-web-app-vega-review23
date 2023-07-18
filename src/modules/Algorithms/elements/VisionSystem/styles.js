import styled from 'styled-components';

const commonStyles = `
  text-align: center;
  color: #808080; // Altere a cor para um cinza mais claro
  font-weight: none;
  font-size: 1.2em; // Reduza o tamanho da fonte
  -webkit-animation: fadeinup 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadeinup 2s; /* Firefox < 16 */
  -ms-animation: fadeinup 2s; /* Internet Explorer */
  -o-animation: fadeinup 2s; /* Opera < 12.1 */
  animation: fadeinup 2s;
`;

const responsiveStyles = `
  @media (max-width: 414px) {
    display: inline;
    height: 100%;
    overflow: hidden;
  }
`;

export const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  height: 100%;
  
  /* padding-top: 95px; */
  padding-top: 0px;


  background-color: var(--color-background);
  ${responsiveStyles}

  /* @media only screen and (max-width: 800px){
    padding-top: 0px;
  } */
`;

export const Content = styled.main`
  display: flex;

  width: 100%;
  height: 100%;
  

  /* padding-top: 100px; */
  
  /* background-color: green; */
  /* ${responsiveStyles} */
`;

export const Controllers = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  height: 100%;

  margin-right: 5px;

  border: 1px solid var(--color-gray);
  border-radius: 5px; 
  padding: 4.5rem 0.5rem; 

  @media only screen and (max-width: 1200px){
    display: none;    
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 5px;
  /* max-width: 250px; */
  /* height: 50px; */

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

    /* &:hover {
    background-color: #ccc;
    color: black;
  } */
`;

export const Range = styled.div`
  display: flex;
  align-items: center;
  
  /* padding-right: -10px;
  padding-left: -10px; */
  /* width: 60%; */

  input {
    /* width: 100%; */
    /* color: white; */
    font-weight: regular;
    font-size: 1.1rem;

    margin-top: 5px;
    margin-bottom: 5px;
    /* margin-left: 30px; */
    /* padding-right: 30px; */
    /* padding-top: 10px; */
    /* padding-bottom: 10px; */
    /* padding-left: 10px; */
  }

  h1 {
    color: white;
    padding-left: 10px;
    font-size: 1em;
  }

  ${responsiveStyles}
`;

export const CentralSection = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */

  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
  /* grid-template-rows: 1fr 1fr; */
  /* gap: 1rem; */


  /* align-items: center; */
  /* justify-content: center; */

  /* height: calc(100vh - 130px); */
  height: 100%;

  width: 100%;

  /* background: yellow; */
`;

export const ContainerSpeed = styled.div`
  visibility: hidden;

  @media only screen and (max-width: 1200px){
    visibility: visible;    
  }
`;

export const WrapperMain = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */

  flex-direction: column;

  
  
  /* height: calc(100vh - 130px); */
  height: 100%;
  width: 100%;
  
  
  /* background: blue; */
`;

export const InnerRight = styled.div`
  display: flex;
  align-items: space-around;

  flex-direction: column;

  position: absolute;
  top: 1rem;
  right: 0.5rem;

  z-index: 1;

  width: 25%;

  article:first-child {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 960px){
    display: none
  }

  @media only screen and (max-width: 800px){
    display: none
  }
`;


export const RealTimeImage = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */

  /* flex-direction: column; */
  /* height: 100%; */
  /* width: 100%; */
  
  flex: 8;
  

  

  /* background: orange; */

  /* grid-area: 1 / 1 / 2 / 2; */
  /* border-radius: 10px; */
  /* margin-top: 10px; */
  /* margin-right: 10px; */
  /* margin-left: 10px; */
  /* border: 1px solid #ccc; */
  /* border-radius: 5px; */
  /* padding: 10px; */
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px 0px;

  /* height: 100%; */
  /* max-height: 36px; */
`;

export const Title = styled.h2`

  color: var(--color-gray);
  font-size: 2rem;
  
  margin: 0.5rem;
  /* padding: 1rem; */

  /* height: calc(100% + 2px);
    left: -1px;
    pointer-events: none;
    position: absolute;
    top: -1px;
    width: calc(100% + 2px); */
`;

export const ObjectDetectionResults = styled.div`
  position: absolute;
  pointer-events: none;
`;

export const ObjectDetectionResultItem = styled.li`
  padding: 4px 8px;
  margin: 3px;
  background-color: #F55E34;
  color: white;
  font-weight: regular;
  font-size: 0.8rem;
  text-decoration: none;
  border: 1px solid #dee2e6;
  font-size: 0.8rem;
  border-radius: 4px;
  /* margin-bottom: 8px; */
`;

export const WebcamWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: relative;
    
    border-radius: 5px;
    border: 1px solid var(--color-gray);

    video {
      width: 100%;
      height: 100%;
  
      border-radius: 5px;
    }
  }

  @media only screen and (max-width: 800px) {
    align-items: end;
  }

  @media only screen and (min-width: 1830px) {
    align-items: initial;
  }

`;

export const ObjectDetectionResultsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 1;
  top: 3.5rem;
  left: 10rem;

  margin: 0;
  padding: 0px;

  list-style-type: none;

  li {
     & + li {
      margin-left: 1.5rem;
    }
  }

`;

export const ConsoleWeb = styled.article`
  height: 100%;
  max-height: 200px;
  min-height: 110px;

  overflow-y: auto;
  
  flex: 1.3;

  line-height: 1.5; 

  border-radius: 5px;
  border: 1px solid var(--color-gray);

  padding: 5px 10px 20px 10px;

  background: #282A35;

  p {
    padding: 5px;

    color: var(--color-white);
  }
`;

export const WrapperSecondary = styled.aside`
  /* background: red; */

  border-radius: 5px;
  border: 1px solid var(--color-gray);

  padding: 0px 5px 10px;

  margin-left: 5px;

  width: 30%;

  @media only screen and (max-width: 960px) {
    display: none;
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
  /* grid-area: 1 / 2 / 2 / 3; */
  /* border-radius: 10px; */
  /* margin-top: 10px; */
  /* margin-right: 10px; */
  /* margin-left: 10px; */
  /* border: 1px solid #ccc; */
  /* border-radius: 5px; */
  /* padding: 10px; */
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
  /* display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 2 / 1 / 3 / 2;
  border-radius: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px; */
`;





export const BoundingBox = styled.div`
  position: absolute;
  border: 2px solid #00ff00;
  box-sizing: border-box;
`;

export const BoundingBoxLabel = styled.div`
  position: absolute;
  top: -1.25em;
  left: 0;
  background-color: #00ff00;
  color: #000000;
  font-size: 0.75em;
  padding: 2px 4px;
  white-space: nowrap;
`;

export const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;


export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5rem 0rem 0rem;
  padding: 1rem .5rem;
    
  font-size: 1.5rem;
  border-radius: 5px;
  background: #333;

  p {
    color: var(--color-gray);
  }

  button {
    font-size: 1.3rem;
    padding: 8px 5px;
    margin: 15px 0px 3px;
  }
`;

export const H1 = styled.h1`
  ${commonStyles}
`;

// Adicionando componentes estilizados adicionais
export const WebCam = styled.div`
  ${commonStyles}
`;

export const ImageStorage = styled.div`
  ${commonStyles}
`;

export const Result = styled.div`
  display: flex;
  h1 {
    ${commonStyles}
  }

  ${responsiveStyles}
`;

