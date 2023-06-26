import React, { useMemo } from 'react';

import { Container, Content, TitlePartner, DescriptionPartner, WrapperItem } from './styles.js'
import logoNVIDIAImg from './assets/logoNVIDIA.png';
// import santandeLogo from './assets/santander-logo.svg';
import fiapLogo from './assets/fiap-logo.svg';
import pmiLogo from './assets/pmi-logo.svg';
import altusLogo from './assets/altus-logo.svg'
import p1Logo from './assets/p1-logo-png.png'
import kalatecLogo from './assets/kalatec-logo-png.png'
import santanderxLogo from './assets/santanderx-logo-png.png'
import santanderuniversidadesLogo from './assets/santanderuniversidades-logo-png.png'
import { FadeInScroll } from '../../../../utils/fadeInScroll/index.js';


export const Partners = () => {
  const partnerData = useMemo(() => {
    return (
      [
        {
          benefitImg: logoNVIDIAImg,
          alt: "NVIDIA-Imagem"
        },
        {
          benefitImg: altusLogo,
          alt: "altus-Imagem"
        },
        {
          benefitImg: p1Logo,
          alt: "p1-Imagem"
        },
        {
          benefitImg: kalatecLogo,
          alt: "kalatec-Imagem"
        },
        {
          benefitImg: pmiLogo,
          alt: "PMI-Imagem"
        },
        {
          benefitImg: santanderuniversidadesLogo,
          alt: "santanderuniversidades-Imagem"
        },
        {
          benefitImg: santanderxLogo,
          alt: "santanderx-Imagem"
        },
        {
          benefitImg: fiapLogo,
          alt: "FIAP-Imagem"
        },
      ]
    )
  }, []);

  return (
    <Container>
      <Content>
        <FadeInScroll
          id="Title-Partner"
          sx={{ txi: '50px', tyi: '0px' }}
        >
          <TitlePartner id="Title-Partner">
            Empresas que são nossos <br />
            parceiros
          </TitlePartner>
        </FadeInScroll>

        <FadeInScroll
          id="Description-Partner"
          sx={{ txi: '-50px', tyi: '0px' }}
        >
          <DescriptionPartner id="Description-Partner">
            Nosso propósito é construir uma ponte entre empresas industriais <br />
            através de soluções engenharia, tecnologia e robotica.
          </DescriptionPartner>
        </FadeInScroll>

        <FadeInScroll
          id="Wrapper-Item"
          sx={{ txi: '0px', tyi: '50px' }}
        >
          <WrapperItem id="Wrapper-Item">
            {
              partnerData.map((item, n) => (
                <li key={n}>
                  <img src={item.benefitImg} alt={item.alt} />
                </li>
              ))
            }
          </WrapperItem>

        </FadeInScroll>
      </Content>
    </Container >
  )
}
