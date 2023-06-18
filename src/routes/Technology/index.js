import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import ListTechnology from '../../components/Technology';
import Footer from '../../components/Footer';

function Technology() {
    return (
        <S.Container>
            <Header/>
            <ListTechnology/>
            <Footer/>
        </S.Container>
    );
}
export default Technology;