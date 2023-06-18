import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;

    height: calc(100% - 130px);

    div {
        height: auto;
    }
`;

export const Wrapper = styled.div`
    /* background-color: #FFFFFF; */
    font-family: Arial, Helvetica, sans-serif; /* fonte padrão */
    font-size: 16px; /* tamanho da fonte */
    line-height: 1.5; /* altura da linha */
    width: 80%; /* largura do artigo */
    margin: 100px auto; /* centralizar o artigo na tela */
    /* padding-left: 30px;
    padding-right: 30px; */ 
    padding-bottom: 55px;
    /* margin-bottom: 50px; */

    h1 {
        color: var(--color-gray);
        font-weight: bold;
        text-align: center; /*Alinha o texto no centro*/
    }
    p {
        margin-bottom: 1em; /* espaço entre os parágrafos */
    }
    img {
        max-width: 100%; /* redimensionar imagens para não ultrapassar a largura do artigo */
        margin: 1em auto; /* centralizar as imagens */
    }

    .slick-dots li button:before {
        color: #fff;
    }
    
    a {
        color: blue; /* cor padrão dos links */
        text-decoration: none; /* remover a sublinhado */
        
    }
    .image1{
        @media (max-width: 414px) {
            width: 110%; 
            height: 110%;
        }
    }
    ${props => props.prevArrow && css`
        &::before {
            content: "";
            width: 20px;
            height: 20px;
            background-color: #891A14;
            color: black;
            font-size: 10px;
            line-height: 40px;
            text-align: center;
            border-radius: 100%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: -999;
            right: 10px;
            display: block;
            @media (max-width: 414px) {
            display: none;
        }
        @media (max-width: 414px) {
            display: none;
            z-index: 1;
        }
        }
    `}
    ${props => props.nextArrow && css`
        &::after {
            content: "";
            width: 20px;
            height: 20px;
            background-color: #891A14;
            color: black;
            font-size: 10px;
            line-height: 40px;
            text-align: center;
            border-radius: 100%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: -999;
            left: 0px;
            display: block;
            @media (max-width: 414px) {
            display: none;
        }
        @media (max-width: 414px) {
            display: none;
            z-index: 1;
        }
        }
    `}
`;
