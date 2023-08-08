import React from 'react';
import * as S from './styles';

// import Header from '../../components/Header';
import Manutention from '../../modules/Algorithms/elements/Manutention';
// import Footer from '../../components/Footer';

function viewManutention() {
    return (
        <S.Container>
            {/* <Header/> */}
            <Manutention/>
            {/* <Footer/> */}
        </S.Container>
    );
}
export default viewManutention;