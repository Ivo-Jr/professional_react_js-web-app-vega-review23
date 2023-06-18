import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import ViewPPF from '../../components/PPF';
import Footer from '../../components/Footer';

function PPF() {
    return (
        <S.Container>
            <Header/>
            <ViewPPF/>
            <Footer/>
        </S.Container>
    );
}
export default PPF;