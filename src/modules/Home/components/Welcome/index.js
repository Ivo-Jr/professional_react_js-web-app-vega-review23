import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

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
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleCTAClick = () => {
    setScrollPosition(scrollPosition + 600);  // 20cm correspondem a aproximadamente 200 pixels
    scroll.scrollTo(scrollPosition, {
      duration: 1000,  // Define a duração da rolagem para 1000 milissegundos (1 segundo)
      smooth: "easeInOutQuint"  // Define o tipo de transição para uma função de aceleração suave
    });
  }

  return (
    <Container id="home">
      <Content imgprops={planetImg}>
        <Title>
        Impulsione sua Competitividade com a Vega Robotics
        </Title>

        <SubTitle>
        Revolucionamos a sua jornada para a Indústria 4.0. Com soluções de automação, digitalização, Internet das Coisas, Computação em Nuvem e Inteligência Artificial, remodelamos seus processos existentes para reduzir custos, eliminar desperdícios e levar sua empresa a novos patamares de eficiência.
        </SubTitle>

        <CTAButton onClick={handleCTAClick}>
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
