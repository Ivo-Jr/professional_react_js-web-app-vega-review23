import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import VME from '../../components/VME';
import Footer from '../../components/Footer';

function ViewVME() {
    return (
        <S.Container>
            <Header/>
            <VME/>
            <Footer/>
        </S.Container>
    );
}
export default ViewVME;