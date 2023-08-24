import React from 'react';

// import technologyImage from '../../../../../assets/techonology.jpg';
// import technologyImage from '../assets/VG422_2235483_41.png';
import Skeleton from '@mui/material/Skeleton';
import { FiArrowUpRight } from 'react-icons/fi';

import {
  Container,
  SideLeft,
  Subtitle,
  Description,
  CTAButton,
  Testimony,
  Person,
  Avatar,
  PersonInfo,
  Name,
  Occupation,
  SideRight,
} from './styles';
import { Link } from 'react-router-dom';

export const Panel = ({
  subtitle,
  description,
  ctaButtonText,
  testimony,
  avatar,
  name,
  occupation,
  color,
  url,
  image
}) => {

  return (
    <Container color={color}>
      <SideLeft>
        <Subtitle>
          {subtitle}
        </Subtitle>
        <Description>
          {description}
        </Description>
        <CTAButton color={color}>
          <Link to={url}>
            {ctaButtonText}
            <FiArrowUpRight />
          </Link>
        </CTAButton>

        <Testimony>
          {testimony}
        </Testimony>

        <Person>
          <Avatar color={color}>
            {avatar ?
              <img src={avatar} alt="avatar-person" />
              :
              <Skeleton variant="circular" sx={{
                bgcolor: 'grey.900'
              }}>
                <img src={avatar} alt="avatar-person" />
              </Skeleton>

            }
          </Avatar>
          <PersonInfo>
            <Name>
              {name}
            </Name>
            <Occupation>
              {occupation}
            </Occupation>
          </PersonInfo>
        </Person>

      </SideLeft>

      <SideRight>
        {image ?
          <img src={image} alt="imagem-tecnologia" />
          :
          <Skeleton variant="rectangular"
            sx={{
              bgcolor: 'grey.900'
            }}
          >
            <img src={image} alt="imagem-tecnologia" />
          </Skeleton>
        }
      </SideRight>
    </Container>
  )
}
