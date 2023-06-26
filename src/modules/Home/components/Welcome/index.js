import React from 'react';

import {
  Container,
  Content,
  Title,
  SubTitle,
  CTAButton,
  WhatsApp
} from "./styles.js"

import whatsApp from "../../../../assets/whatsapp.svg";
import { FiArrowUpRight } from "react-icons/fi";
import planetImg from '../../assets/planet.png'

export const Welcome = () => {
  return (
    <Container id="home">
      <Content imgprops={planetImg}>
        <Title>
        Impulsione sua Competitividade com a Vega Robotics
        </Title>

        <SubTitle>
        Revolucionamos a sua jornada para a Indústria 4.0. Com soluções de automação, digitalização, Internet das Coisas, Computação em Nuvem e Inteligência Artificial, remodelamos seus processos existentes para reduzir custos, eliminar desperdícios e levar sua empresa a novos patamares de eficiência.
        </SubTitle>

        <CTAButton>
          Eu quero conhecer
          <FiArrowUpRight color="#fff" />
        </CTAButton>

        <WhatsApp href="https://wa.me/+551151998949" target="_blank" rel="noreferrer">
          <img src={whatsApp} alt="logo-whatsapp" />
        </WhatsApp>
      </Content>
    </Container>
  )
}
