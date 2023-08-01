import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  @media (max-width: 414px) {
    background-color: #FFFFFF;
    height: 100%;
    overflow: hidden;
  }
`;

export const StyledTitle = styled.h1`
  color: #2e2e2e;
  font-weight: bold;
  font-size: 1.8em;
  line-height: 1.2;
  text-decoration: none;
  margin: 40px 30px 30px 30px;
  text-align: center;
`;

export const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const VideoCanvasWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* Mantido como column */
  align-items: center;
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 414px) {
    width: 100%;
    height: auto;
    background-color: #FFFFFF;
  }
`;

export const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;
