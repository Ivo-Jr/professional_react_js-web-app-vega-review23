import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

function ListArtigos() {
  return (
    <S.Container>
      <S.Text>
        <h1>Articles</h1>
      </S.Text>
      <S.Buttons>
        <Link to="/engenharia"><button>Current Engineering</button></Link>
        <Link to="/boaspraticasprojetos"><button>5 Best Practices for Stamping Projects</button></Link>
        <Link to="/grabcad"><button>GRABCAD → What is it? What is it for?</button></Link>
        <Link to="/guiaslineares"><button>Linear Guides → What are they? how to specify them</button></Link>
        <Link to="/PPF"><button>Machine Design</button></Link>
      </S.Buttons>
    </S.Container>
  );
}

export default ListArtigos;