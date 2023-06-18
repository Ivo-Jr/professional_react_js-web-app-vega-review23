import React from 'react';
import VideoS from '../../assets/videohome.mp4';
import * as S from './styles';

function Video() {
    return (
        <S.Container>
            <S.SVideo>
                <video id="videoBanner" className="SVideo" autoPlay muted loop>
                    <source src={VideoS} type='video/mp4'></source>
                </video>
                
            </S.SVideo>
            <S.SText>
            <span>Otimize seus Processos e Torne
                    <br/>
                    sua Organização mais Competitiva</span>
                    <br/>
                    <h3>Oferecemos soluções de ponta a ponta para industria 4.0: Remodelamento de Processos Existentes (retrofit), Digitalização, 
                        <br/>
                        Automação, Internet da Coisas, Computação em Nuvem, IA; a serviço da redução de custo e desperdicios para uma industria mais competitiva.
                    </h3>
            </S.SText>
            
        </S.Container>
    );
}
export default Video;