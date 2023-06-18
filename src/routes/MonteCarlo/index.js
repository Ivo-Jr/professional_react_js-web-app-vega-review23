import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import MonteCarlo from '../../components/MonteCarlo';
import Footer from '../../components/Footer';

function ViewMonteCarlo() {
    return (
        <S.Container>
            <Header/>
            <MonteCarlo/>
            <Footer/>
        </S.Container>
    );
}
export default ViewMonteCarlo;