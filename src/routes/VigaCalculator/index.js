import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import VigaCalculator from '../../components/VigaCalculator';
import Footer from '../../components/Footer';

function ViewVigaCalculator() {
    return (
        <S.Container>
            <Header/>
            <VigaCalculator/>
            <Footer/>
        </S.Container>
    );
}
export default ViewVigaCalculator;