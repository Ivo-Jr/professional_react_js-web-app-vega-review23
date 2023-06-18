import styled, { css } from 'styled-components';

const commonStyles = css`
  text-align: center;
  color: #FFFFFF;
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
        color: #FFFFFF;
        font-weight: lighter;
        font-size: 1.5em;
        line-height: 0;
        text-decoration: none;
        padding-top: 50px;
        margin-top: -10px;
        margin-right: 30px;
        margin-left: 30px;
        margin-bottom: 30px;
        @media (max-width: 414px) {
            font-size: 80%;
            margin-top: -100px;
            /* height: 20%; */
            /* overflow: hidden; */
        }
    }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #161a1e;
  /* margin-bottom: -45px; */
  /* background-color: #FFFFFF; */
  ${commonStyles}
  ${responsiveStyles}
`;

export const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 20px; // Ajuste esse valor conforme necessário
  
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #161a1e;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  cursor: pointer;
  padding-top: -15px;
  text-decoration: none;
  width: 300px; // Ajuste o tamanho do card aqui
  @media (max-width: 414px) {
            /* font-size: 80%; */
            margin-bottom: 80px;
            /* height: 20%; */
            /* overflow: hidden; */
        }

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.9);
    transform: scale(1.04);
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
  color: gray;
  text-align: center;
  
`;

export const Title = styled.h3`
  padding: 5px;
  color: gray;
  font-size: 0.8em;
  text-align: center;
  
`;


