import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Video from '../../components/Video';
// import ViewProducts from '../../components/ViewProducts';
import Budget from "../../components/Budget";
import Footer from '../../components/Footer';

function Home() {
  return (
    <S.Container>
      <Header />
      <S.Content />
      <Video />
      <Budget />
      <Footer />
    </S.Container>
  );
}

export default Home;