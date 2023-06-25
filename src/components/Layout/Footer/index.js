import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Content,
  WrapperIcons,
  Icons,
  WrapperRights,
  Rights,
} from './styles';

import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io';
import { FaCode } from 'react-icons/fa';
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { ScrollToTopButton } from '../../../utils/ScrollToTop';

export const Footer = () => {
  return (
    <Container>
      <Content>
        <WrapperIcons>
          <Icons>
            <a href="https://www.youtube.com/channel/UCXrrWajAUavg6n2vghDR5AQ" target="_blank" rel="noreferrer" >
              <AiFillYoutube />
            </a>
            <a href="https://www.instagram.com/vega.robotics/" target="_blank" rel="noreferrer" >
              <AiFillInstagram />
            </a>
            <a href="https://www.linkedin.com/company/vega-robotics-tech/?viewAsMember=true" target="_blank" rel="noreferrer" >
              <AiFillLinkedin />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B551151998949&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" >
              <IoLogoWhatsapp />
            </a>
            <a href="mailto:contato@vegarobotics.com.br">
              <IoMdMail />
            </a>
            <Link to="/algoritmos">
              <FaCode />
            </Link>
          </Icons>
        </WrapperIcons>

        <WrapperRights>
          <ScrollToTopButton />
          <Rights>
            ® Vega Robotics. All rights reserved.
          </Rights>
        </WrapperRights>
      </Content>
    </Container>
  )
}