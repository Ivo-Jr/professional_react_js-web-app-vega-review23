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
  height: 100%;
  background-color: #FFFFFF;
  ${responsiveStyles}
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  ${responsiveStyles}
`;

export const ObjectDetectionResults = styled.div`
  position: absolute;
  pointer-events: none;
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

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 5px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc; // Adicione a borda
  border-radius: 5px; // Adicione o border-radius
  padding: 5px; // Adicione um espaçamento interno para que os botões não fiquem grudados na borda
  /* background-color: #6b6b6b; */
`;


export const CentralSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const RealTimeImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1 / 1 / 2 / 2;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

export const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const CapturedImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1 / 2 / 2 / 3;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

export const ResultantImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 2 / 1 / 3 / 2;
  border-radius: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 2 / 2 / 3 / 3;
  border-radius: 10px;
`;

export const Button = styled.button`
  background-color: #F55E34;
  color: white;
  font-weight: regular;
  font-size: 0.8rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  margin: 5px 0;
  padding: 9px 10px;

  &:hover {
    background-color: #ccc;
    color: black;
    transition: 1s;
  }
`;

export const H1 = styled.h1`
  ${commonStyles}
`;

// Adicionando componentes estilizados adicionais
export const WebCam = styled.div`
  ${commonStyles}
`;

export const WebcamWrapper = styled.div`
  position: relative;

  video {
    border-radius: 10px;
  }
`;

export const ImageStorage = styled.div`
  ${commonStyles}
`;

export const Range = styled.div`
  display: inline-flex;
  /* padding-right: -10px;
  padding-left: -10px; */
  /* width: 60%; */

  input {
    width: 100%;
    /* color: white; */
    font-weight: regular;
    font-size: 1em;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 30px;
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

export const Result = styled.div`
  display: flex;
  h1 {
    ${commonStyles}
  }

  ${responsiveStyles}
`;

export const ObjectDetectionResultsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ObjectDetectionResultItem = styled.li`
  padding: 4px 8px;
  background-color: #F55E34;
  color: white;
  font-weight: regular;
  font-size: 0.8rem;
  text-decoration: none;
  border: 1px solid #dee2e6;
  font-size: 0.8rem;
  border-radius: 4px;
  margin-bottom: 8px;
`;