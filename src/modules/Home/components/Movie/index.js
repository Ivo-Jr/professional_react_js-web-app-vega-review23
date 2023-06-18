import React from 'react';
import NVIDIAMovie from './video/videoNVIDIA-PT.mp4'

import {
    Container,
    Content,
    SVideo,
    WrapperText,
    Div,
    Subtitle
} from './styles';
import { FadeInScroll } from '../../../../utils/fadeInScroll';

export const Movie = () => {
    return (
        <Container>
            <Content>
                <FadeInScroll
                    id={'videoBanner'}
                    sx={{ txi: '0px', tyi: '50px' }}
                >
                    <SVideo>
                        <video
                            id="videoBanner"
                            className="SVideo"
                            autoPlay
                            controls
                            muted
                            loop
                        >
                            <source src={NVIDIAMovie} type='video/mp4'></source>
                        </video>
                    </SVideo>
                </FadeInScroll>
                <WrapperText>
                    <Div />
                    <FadeInScroll
                        id="subtitle-after-video"
                        sx={{ txi: '50px', tyi: '0px' }}
                    >
                        <Subtitle id="subtitle-after-video">
                            Soluções de ponta a ponta para Otimização de Processos e Redução de Custo!
                        </Subtitle>
                    </FadeInScroll>
                </WrapperText>
            </Content>
        </Container>
    );
}