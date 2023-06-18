import React from 'react';

import technologyImage from '../../../../../assets/techonology.jpg';
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
  SideRight
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
  url
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
            <img src={avatar} alt="avatar-person" />
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
        <img src={technologyImage} alt="imagem-tecnologia" />
      </SideRight>
    </Container>
  )
}
