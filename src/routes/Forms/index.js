import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import ViewForms from '../../components/Forms';
import Footer from '../../components/Footer';

function Forms() {
    return (
        <S.Container>
            <Header/>
            <ViewForms/>
            <Footer/>
        </S.Container>
    );
}
export default Forms;