import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: calc(100% - 130px);
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-direction: column;

    width: 100%;
    max-width: 1150px;
    height: 100%;  
    max-height: calc(530px);
    margin-top: 100px;

`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const StyledCanvas = styled.canvas`
  border: 1px solid black;
`;
