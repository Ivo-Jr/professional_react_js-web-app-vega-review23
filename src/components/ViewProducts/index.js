import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import video4 from '../../assets/video4.mp4';

function ViewProducts() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const cardsData = [
    {
      title: 'Projeto de Máquinas',
      video: video4,
      description: 'Processos sob medida, de forma geral conferem maior performance pois se adequam essencialmente as necessidades do modelo proposto. Somos especialistas em abstrair essas necessidades dos processos e torna-los realidade. Com vasta experiencia em inovação, proporcionamos aos nossos clientes grande vantagem competitiva na entrega de uma solução sob medida.',
      link: '/quotes',
    },
    {
      title: 'Projeto de Estampos',
      video: video1,
      description: 'Elaboramos seus projetos de forma otimizada desde o plano de métodos até a implantação. Seja orçamento ou melhorias de processo, ajudaremos na busca pelo melhor processo com o máximo de lucratividade. Com profissionais experientes de mercado, junto com a utilização dos mais modernos conceitos simulação CAE, entregamos valor e resultado ao se tratar de estampos de qualidade.',
      link: '/quotes',
    },
    {
      title: 'Projeto de Dispositivos',
      video: video2,
      description: 'Processos manuais de solda demandam multiplos recursos, diversas fichas por recursos; muitas vezes dificeis de controlar e ineficazes ao longo do tempo. Somos especialistas em automatizar processos manuais através de dispositivos e automações. Produza com mais qualidade, com menos recursos e mais rapidamente com nossas soluções.',
      link: '/quotes',
    },
    {
      title: 'Detalhamento Técnico',
      video: video3,
      description: 'Entendemos que o detalhamento é uma etapa crucial para a construção de uma solução. Essa etapa determina o sucesso da aplicação ou uma série de retrabalhos, custo extras e não atendimentos de prazos. Atendendo as normas vigentes na ABNT, requisitos e boas práticas de mercado, oferecemos esse serviço sob demanda com a máxima qualidade, e atendimento ao requisitos e prazos de nossos clientes.',
      link: '/quotes',
    },
  ];
  const cardsPerSlide = windowWidth > 768 ? 4 : 1; // 4 cards para desktop, 1 para mobile
  const slidesData = [];

  for (let i = 0; i < cardsData.length; i += cardsPerSlide) {
    slidesData.push(cardsData.slice(i, i + cardsPerSlide));
  }

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Container>
      <S.Text><h1>Conheça nossos Serviços</h1></S.Text>
      <Carousel autoPlay interval={10000} infiniteLoop showThumbs={false} showStatus={false} showIndicators={false}>
        {slidesData.map((slide, index) => (
          <S.SlideWrapper key={index}>
            {slide.map((card, cardIndex) => (
              <Link to={card.link} key={cardIndex} style={{ textDecoration: 'none' }}>
                <S.Card
                  onMouseEnter={(e) => e.currentTarget.querySelector('video').play()}
                  onMouseLeave={(e) => e.currentTarget.querySelector('video').pause()}
                >
                  <S.Title>{card.title}</S.Title>
                  <S.VideoWrapper>
                    <S.Video src={card.video} loop muted />
                  </S.VideoWrapper>
                  <S.Description>{card.description}</S.Description>
                </S.Card>
              </Link>
            ))}
          </S.SlideWrapper>
        ))}
      </Carousel>
    </S.Container>
  );
}
export default ViewProducts;