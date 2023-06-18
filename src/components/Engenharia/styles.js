import styled, { css } from 'styled-components';

const commonStyles = css`
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

const responsiveStyles = css`
  @media (max-width: 414px) {
    display: inline;
    height: 100%;
    overflow: hidden;
  }
`;

export const Text = styled.div`
    h1 {
        color: #2e2e2e;
        font-weight: none;
        font-size: 1.8em;
        line-height: 0;
        text-decoration: none;
        margin-top: 40px;
        margin-right: 30px;
        margin-left: 30px;
        margin-bottom: 30px;
    }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  ${commonStyles}
  ${responsiveStyles}
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 30px;
  border-radius: 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  width: 300px; // Ajuste o tamanho do card aqui

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
        opacity: 20;
        transition: 1s;
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; // 16:9 Aspect Ratio
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  max-width: 300px; // Ajuste o tamanho máximo do vídeo aqui
`;


export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Description = styled.p`
  padding: 10px;
  font-size: 1rem;
  color: #333;
  text-align: center;
`;
