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
          Otimize seus Processos e Torne sua Organização mais Competitiva
        </Title>

        <SubTitle>
          Oferecemos soluções de ponta a ponta para industria 4.0: Remodelamento de Processos Existentes (retrofit), Digitalização, Automação, Internet da Coisas, Computação em Nuvem, IA; a serviço da redução de custo e desperdicios para uma industria mais competitiva.
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
