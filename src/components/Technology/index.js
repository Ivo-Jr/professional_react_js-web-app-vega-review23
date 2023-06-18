import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

import imagem from '../../assets/NVIDIA.jpeg';

function Intro() {
  return (
    <S.Container>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'calc(100% - 100px)' }}>
        <h1>Welcome!</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '30px' }}>
          <S.Image src={imagem} alt="Imagem de introdução" />
          <p style={{ maxWidth: '50%' }}>
            Vega Robotics offers an industrial quality inspection solution using artificial intelligence and IoT. With our app, you can easily choose a camera to capture images, set an acceptance margin for comparison, declare a standard for reference, compare and perform new checks. In addition, we are proud to be part of the NVIDIA Inception Acceleration Program, which allows us to always be on the cutting edge of technology.
          </p>
        </div>
      </div>
      <S.Button>
        <Link to="/visionsystem">
          <button>Test Pilot</button>
        </Link>
      </S.Button>
    </S.Container>
  );
}

export default Intro;
