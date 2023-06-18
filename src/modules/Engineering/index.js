import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

import { FiArrowUpRight } from 'react-icons/fi'

import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import video4 from '../../assets/video4.mp4';
import { Button } from '../../components/Button';

export const Engineering = () => {
  const cardsData = useMemo(() => {
    return (
      [
        {
          video: video1,
          description: 'Progressive Stamps',
          link: '',
        },
        {
          video: video2,
          description: 'Welding Devices',
          link: '',
        },
        {
          video: video3,
          description: 'Detail On Demand',
          link: '',
        },
        {
          video: video4,
          description: 'Prototypes and Industrial Innovations',
          link: '',
        },
      ]
    )
  }, [])

  return (
    <S.Container>
      <S.Text>Industrial Engineering Services</S.Text>
      <S.CardsWrapper>
        {cardsData.map((card, index) => (
          <S.Card key={index} to={card.link}>
            <S.VideoWrapper
              onMouseEnter={(e) => e.currentTarget.querySelector('video').play()}
              onMouseLeave={(e) => e.currentTarget.querySelector('video').pause()}
            >
              <S.Video src={card.video} loop muted />
            </S.VideoWrapper>
            <S.Description>{card.description}</S.Description>
            <Button>
              <Link to="/budget">
                Faça um orçamento
                <FiArrowUpRight />
              </Link>
            </Button>
          </S.Card>
        ))}
      </S.CardsWrapper>
    </S.Container>
  );
}
