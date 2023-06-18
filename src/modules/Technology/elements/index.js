import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, WrapperText, CTAButton, ContentIntro } from './styles';

import imagem from '../../../assets/NVIDIA.jpeg';

export const Intro = () => {
  return (
    <Container>
      <ContentIntro id="Content-Intro">
        <Image src={imagem} alt="Imagem de introdução" />

        <WrapperText>
          <h1>Welcome!</h1>

          <p>
            Vega Robotics offers an industrial quality inspection solution using artificial intelligence and IoT. With our app, you can easily choose a camera to capture images, set an acceptance margin for comparison, declare a standard for reference, compare and perform new checks. In addition, we are proud to be part of the NVIDIA Inception Acceleration Program, which allows us to always be on the cutting edge of technology.
          </p>
        </WrapperText>
      </ContentIntro>


      <CTAButton>
        <Link to="/algorithms/visionsystem">
          Test Pilot
        </Link>
      </CTAButton>
    </Container>
  );
}

