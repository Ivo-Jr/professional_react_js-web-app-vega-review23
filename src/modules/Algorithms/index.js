import React from 'react';
import { Container, Text, Controllers } from './styles';
import { Link } from 'react-router-dom';
import { Print } from '../../components/Print';
import { Button } from '../../components/Button';

export const Algorithms = () => {
  return (
    <Container>
      <Text>Algoritmos</Text>

      <Controllers>
        <Button>
          <Link to="grossweight">
            Gross weight
          </Link>
        </Button>
        <Button>
          <Link to="cuttingforce">
            Cutting Force
          </Link>
        </Button>
        <Button>
          <Link to="bendingforce">
            Bending Force
          </Link>
        </Button>
        <Button>
          <Link to="energyconsumption">
            Energy Consumption
          </Link>
        </Button>
        <Button>
          <Link to="vixem">
            Face Mesh
          </Link>
        </Button>
        <Button>
          <Link to="visionsystem">
            Vision System
          </Link>
        </Button>
        <Button>
          <Link to="objectdetection">
            Object Detection
          </Link>
        </Button>
        <Button>
          <Link to="vme">
            PMBOK® Expected Monetary Value
          </Link>
        </Button>
        <Button>
          <Link to="riskprioritization">
            PMBOK® Risk Prioritization
          </Link>
        </Button>
        <Button>
          <Link to="screencaptureanddisplay">
            ScreenCaptureAndDisplay
          </Link>
        </Button>
        <Print />

        {/* <Link to="/stopWatch"><button>Cronômetro</button></Link> */}

        {/* <Link to="/vigacalculator"><button>Dimensionamento Viga I</button></Link> */}
        {/* <Link to="/paint"><button>Paint</button></Link> */}
      </Controllers>
    </Container>
  );
}
