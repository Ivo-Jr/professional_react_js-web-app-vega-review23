import React from 'react';
import { Container, Text, Controllers } from './styles';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

export const Article = () => {
  return (
    <Container>
      <Text>Articles</Text>

      <Controllers>
        <Button>
          <Link to="/engineering">
            Current Engineering
          </Link>
        </Button>
        <Button>
          <Link to="bestpractices">
            5 Best Practices for Stamping Projects
          </Link>
        </Button>
        <Button>
          <Link to="grabcad">
            GRABCAD → What is it? What is it for?
          </Link>
        </Button>
        <Button>
          <Link to="linearguides">
            Linear Guides
          </Link>
        </Button>
        <Button>
          <Link to="ppf">
            Machine Design
          </Link>
        </Button>
      </Controllers>
    </Container>
  );
}
