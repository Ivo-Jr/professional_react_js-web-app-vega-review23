import React, { useMemo } from 'react';

import { Container, TitleBenefit, Wrapper } from './styles.js'
import { BenefitCard } from './BenefitCard';
import programImg from '../../assets/program.svg';
import { FadeInScroll } from '../../../../utils/fadeInScroll/index.js';

export const BenefitsSection = () => {
  const benefitData = useMemo(() => {
    return (
      [
        {
          benefitImg: programImg,
          benefitSubtitle: 'Tecnologia de alto nível',
          benefitDescription: 'Fique por dentro das maires tecnologias do mercado, com tecnologias de alto nível.',
          animationDelay: 1,
        },
        {
          benefitImg: programImg,
          benefitSubtitle: 'Equipe especializada',
          benefitDescription: 'A Vega conta com um time especializado no mercado, pronto para atender sua demanda.',
          animationDelay: 1.1,
        },
        {
          benefitImg: programImg,
          benefitSubtitle: 'Experiencia de mercado',
          benefitDescription: 'Time junta uma experiencia de mercado de mais de 25 anos, afim de te entregar produtos competitivos',
          animationDelay: 1.3,
        },
        {
          benefitImg: programImg,
          benefitSubtitle: 'Projetos de ponta',
          benefitDescription: 'A Vega conta com projetos de ponta a ponta, onde você acompanha desde o planejamento até produção.',
          animationDelay: 1.5,
        },
        {
          benefitImg: programImg,
          benefitSubtitle: 'Forum exclusivo',
          benefitDescription: 'Tire dúvidas técnicas de forma estruturada e receba nosso suporte. ',
          animationDelay: 1.6,
        },
        {
          benefitImg: programImg,
          benefitSubtitle: 'Soluções de engenharia',
          benefitDescription: 'Consulte uma das soluções que a Vega tem para sua industria/empresa.',
          animationDelay: 1.7,
        }
      ]
    )
  }, []);

  return (
    <Container>
      <FadeInScroll
        id="Title-Benefits"
        sx={{ txi: '0px', tyi: '-50px' }}
      >
        <TitleBenefit id="Title-Benefits">
          Por que escolher a <br />
          Vega Robotics?
        </TitleBenefit>
      </FadeInScroll>

      <FadeInScroll
        id="WrapperBenefit"
        sx={{ txi: '0px', tyi: '50px' }}
      >
        <Wrapper id="WrapperBenefit">
          {benefitData.map((benefit, idx) => (
            <BenefitCard
              key={idx}
              id={`benefit-${Number(idx) + 1}`}
              animationDelay={benefit.animationDelay}
              benefitImg={benefit.benefitImg}
              benefitSubtitle={benefit.benefitSubtitle}
              benefitDescription={benefit.benefitDescription}
            />
          ))}
        </Wrapper>
      </FadeInScroll>

      <hr />
    </Container>
  )
}
