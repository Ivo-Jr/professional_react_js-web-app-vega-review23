import React, { useMemo, useState, useEffect } from 'react';

import { Container, Content, Header, Title, ImgTitle, Wrapper, NumbersItem } from './styles.js'
import CountUp from 'react-countup';

import logoVegaImg from '../../../../assets/logoVega.svg'
import { FadeInScroll } from '../../../../utils/fadeInScroll/index.js';

export const VegaNumbers = () => {
  const numberData = useMemo(() => {
    return (
      [
        {
          number: '500',
          description: "Reais economizados com nossas consultorias",
        },
        {
          number: '2',
          description: "Projetos executados",
        },
        {
          number: '1',
          description: "Empresas impactadas",
        },
        {
          number: '1',
          description: "Seguidores nos acompanhando",
        }
      ]
    )
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('Wrapper-numbers');
    const react = element?.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if ((react?.top + 70) < viewportHeight) {
      setIsVisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <FadeInScroll
            id={'header-numbers'}
            sx={{ txi: '-50px', tyi: '0px' }}
          >

            <Title id="Wrapper-numbers">
              Impulsionamos centenas <br /> de empresas
            </Title>
          </FadeInScroll>

          <FadeInScroll
            id={'header-numbers'}
            sx={{ txi: '50px', tyi: '0px' }}
          >
            <ImgTitle src={logoVegaImg} alt="logoVega-imagem" />
          </FadeInScroll>
        </Header>

        <Wrapper>
          {
            numberData.map((item, idx) => (
              <NumbersItem key={idx}>
                <div>
                  <h4>
                    <span>+
                      <CountUp
                        start={isVisible}
                        end={item.number}
                        duration={10}
                      />
                    </span> mil
                  </h4>
                  <hr />
                </div>
                <p>{item.description}</p>
              </NumbersItem>
            ))
          }
        </Wrapper>
      </Content>
      <hr />
    </Container>
  )
}