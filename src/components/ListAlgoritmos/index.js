import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { Print } from '../Print';

function ListAlgoritmos() {
  return (
    <S.Container>
      <S.Text>
        <h1>Algoritmos</h1>
      </S.Text>
      <S.Buttons>
        <Link to="/pesobruto"><button>Gross weight</button></Link>
        <Link to="/forcacorte"><button>Cutting Force</button></Link>
        <Link to="/forcadobra"><button>Bending Force</button></Link>
        <Link to="/energyconsumption"><button>Energy Consumption</button></Link>
        {/* <Link to="/stopWatch"><button>Cronômetro</button></Link> */}
        <Link to="/vixem"><button>Face Mash</button></Link>
        <Link to="/visionsystem"><button>Vision System</button></Link>
        <Link to="/objectdetection"><button>Object Detection</button></Link>
        <Link to="/VME"><button>PMBOK® Expected Monetary Value</button></Link>
        <Link to="/PR"><button>PMBOK® Risk Prioritization</button></Link>
        <Link to="/ScreenCaptureAndDisplay"><button>ScreenCaptureAndDisplay</button></Link>
        <Print><button>CaptureScreen</button></Print>
        {/* <Link to="/vigacalculator"><button>Dimensionamento Viga I</button></Link> */}
        {/* <Link to="/paint"><button>Paint</button></Link> */}
      </S.Buttons>
    </S.Container>
  );
}

export default ListAlgoritmos;