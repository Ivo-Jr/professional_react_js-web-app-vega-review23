import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import ReadWebPage from '../../components/ReadWebPage';
import Footer from '../../components/Footer';

function ViewReadWebPage() {
    return (
        <S.Container>
            <Header/>
            <ReadWebPage/>
            <Footer/>
        </S.Container>
    );
}
export default ViewReadWebPage;