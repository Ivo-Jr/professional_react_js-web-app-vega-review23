import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import PR from '../../components/PR';
import Footer from '../../components/Footer';

function ViewPR() {
    return (
        <S.Container>
            <Header/>
            <PR/>
            <Footer/>
        </S.Container>
    );
}
export default ViewPR;