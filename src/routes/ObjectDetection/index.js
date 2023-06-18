import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import ObjectDetection from '../../components/ObjectDetection';
import Footer from '../../components/Footer';

function ViewObjectDetection() {
    return (
        <S.Container>
            <Header/>
            <ObjectDetection/>
            <Footer/>
        </S.Container>
    );
}
export default ViewObjectDetection;