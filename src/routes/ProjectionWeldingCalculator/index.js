import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import ProjectionWeldingCalculator from '../../components/ProjectionWeldingCalculator';
import Footer from '../../components/Footer';

function ViewProjectionWeldingCalculator() {
    return (
        <S.Container>
            <Header/>
            <ProjectionWeldingCalculator/>
            <Footer/>
        </S.Container>
    );
}
export default ViewProjectionWeldingCalculator;