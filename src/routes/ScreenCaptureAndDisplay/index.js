import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import ScreenCaptureAndDisplay from '../../components/ScreenCaptureAndDisplay';
import Footer from '../../components/Footer';

function ViewScreenCaptureAndDisplay() {
    return (
        <S.Container>
            <Header/>
            <ScreenCaptureAndDisplay/>
            <Footer/>
        </S.Container>
    );
}
export default ViewScreenCaptureAndDisplay;