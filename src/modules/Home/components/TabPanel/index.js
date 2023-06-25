import React, { useState, useMemo } from 'react';

import avatarImage from '../../assets/ariadneIA.jpg';

import {
  Container,
  Content,
  Wrapper,
  Tab,
  Switch
} from './styles';
import { Panel } from './Panel';
import { FadeInScroll } from '../../../../utils/fadeInScroll';

export const TabPanel = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index)
  }

  const tabView = useMemo(() => {
    return (
      [
        {
          title: "Engenharia",
          subtitle: "Serviços de engenharia Industrial",
          description: "Você vai encontrar projetos de ponta feitos sob demanda utilizando as ferramentas mais modernas do mercado.",
          ctaButtonText: "Quero conhecer",
          testimony: '"A VegaRobotics trás soluçòes simplesmente incríveis, muito prático, além do pronto atendimento, transparencia e cordialidade na execução dos projetos."',
          avatar: avatarImage,
          name: "Luiza D.",
          occupation: "Remote Developer",
          color: "#891A14",
          url: "/engineering"
        },
        {
          title: "Tecnologia",
          subtitle: "Serviços de Tecnologia",
          description: "As melhores tecnologias alinhadas com sua necessidade. Aqui você encontra soluções adequadas com preços competitivos.",
          ctaButtonText: "Saiba Como",
          testimony: '"A VegaRobotics trás soluçòes simplesmente incríveis, muito prático, além do pronto atendimento, transparencia e cordialidade na execução dos projetos."',
          avatar: avatarImage,
          name: "Luiza D.",
          occupation: "Remote Developer",
          color: "#4863f7",
          url: "/technology"
        }
        // {
        //   title: "Robotica",
        //   subtitle: "Serviços de Robotica",
        //   description: "A funcionaidade adequada para sua empresa, industria ou négocio está aqui! Há um clique de distância, aperte no botão abaixo para entender!",
        //   ctaButtonText: "Conhecer a Robotica",
        //   testimony: '"A VegaRobotics trás soluçòes simplesmente incríveis, muito prático, além do pronto atendimento, transparencia e cordialidade na execução dos projetos."',
        //   avatar: avatarImage,
        //   name: "Luiza D.",
        //   occupation: "Remote Developer",
        //   color: "#42d3ff",
        //   url: "/"
        // }
      ]
    )
  }, []);

  return (
    <Container>
      <FadeInScroll
        id="Content-Panel"
        sx={{ txi: '-50px', tyi: '0px' }}
      >
        <Content>
          <Tab activetab={activeTab} color={tabView[activeTab].color}>
            <Switch id="engineering" aria-selected={activeTab === 0 ? true : false} onClick={() => handleTabChange(0)}><span>⚙️</span>{tabView[0].title}</Switch>
            <Switch id="Technology" aria-selected={activeTab === 1 ? true : false} onClick={() => handleTabChange(1)}><span>💻</span>{tabView[1].title}</Switch>
            {/* <Switch id="Robotic" aria-selected={activeTab === 2 ? true : false} onClick={() => handleTabChange(2)}><span>🦾</span>{tabView[2].title}</Switch> */}
          </Tab>

          <Wrapper activetab={activeTab}>
            {activeTab === 0 &&
              <Panel
                subtitle={tabView[activeTab].subtitle}
                description={tabView[activeTab].description}
                ctaButtonText={tabView[activeTab].ctaButtonText}
                testimony={tabView[activeTab].testimony}
                avatar={tabView[activeTab].avatar}
                name={tabView[activeTab].name}
                occupation={tabView[activeTab].occupation}
                color={tabView[activeTab].color}
                url={tabView[activeTab].url}
              />
            }
            {activeTab === 1 &&
              <Panel
                subtitle={tabView[activeTab].subtitle}
                description={tabView[activeTab].description}
                ctaButtonText={tabView[activeTab].ctaButtonText}
                testimony={tabView[activeTab].testimony}
                avatar={tabView[activeTab].avatar}
                name={tabView[activeTab].name}
                occupation={tabView[activeTab].occupation}
                color={tabView[activeTab].color}
                url={tabView[activeTab].url}
              />
            }
            {/* {activeTab === 2 &&
              <Panel
                subtitle={tabView[activeTab].subtitle}
                description={tabView[activeTab].description}
                ctaButtonText={tabView[activeTab].ctaButtonText}
                testimony={tabView[activeTab].testimony}
                avatar={tabView[activeTab].avatar}
                name={tabView[activeTab].name}
                occupation={tabView[activeTab].occupation}
                color={tabView[activeTab].color}
                url={tabView[activeTab].url}
              />
            } */}
          </Wrapper>
        </Content>
      </FadeInScroll>
      <hr />
    </Container>
  )
}
