import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import video4 from '../../assets/video4.mp4';

function Cards() {
  const cardsData = [
    {
      video: video1,
      description: 'Progressive Stamps',
      link: '/quotes',
    },
    {
      video: video2,
      description: 'Welding Devices',
      link: '/quotes',
    },
    {
      video: video3,
      description: 'Detail On Demand',
      link: '/quotes',
    },
    {
      video: video4,
      description: 'Prototypes and Industrial Innovations',
      link: '/quotes',
    },
  ];

  return (
    <S.Container>
      <S.Text><h1>Industrial Engineering Services</h1></S.Text>
      <S.CardsWrapper>
        {cardsData.map((card, index) => (
          <Link to={card.link} key={index} style={{ textDecoration: 'none' }}>
            <S.Card>
              <S.VideoWrapper
                onMouseEnter={(e) => e.currentTarget.querySelector('video').play()}
                onMouseLeave={(e) => e.currentTarget.querySelector('video').pause()}
              >
                <S.Video src={card.video} loop muted />
              </S.VideoWrapper>
              <S.Description>{card.description}</S.Description>
            </S.Card>
          </Link>
        ))}
      </S.CardsWrapper>
    </S.Container>
  );
}

export default Cards;
