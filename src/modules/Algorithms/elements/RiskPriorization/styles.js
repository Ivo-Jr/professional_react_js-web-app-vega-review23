import styled from 'styled-components';
import VME from '../../../../assets/VME.jpg';

export const Container = styled.div`
    height: calc(100% - 130px);
   
    background-color: #FFFFFF;
    background-size: 100%;
    background-position: bottom right;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    
    width: 100%;
    max-width: 1150px;
    height: 100%;
`;

export const Calc = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;

    padding-top: 0.15rem;
    padding-left: 2rem;
    padding-bottom: 3rem;  
h1 {
    color: #333;
    font-weight: regular;
    font-size: 3rem;
    text-decoration: none;
}

label {
    color: #2e2e2e;
    font-weight: regular;
    font-size: 1.15em;
    text-decoration: none;
    padding-top: 0.5rem;
    padding-bottom: 0.25rem;
}
span {
    padding-top: 1rem;
    color: #2e2e2e;
    font-weight: bold;
    font-size: 1.25em;
    text-decoration: none;
}
input, select {
    width: 50%;
    color: #2e2e2e;
    font-weight: regular;
    text-decoration: none;
    font-size: 1.15em;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
`
export const ImageContainer = styled.div`
    flex: 1;
    min-height: 400px; // Adicione esta linha
    background-image: url(${VME});
    margin-right: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;