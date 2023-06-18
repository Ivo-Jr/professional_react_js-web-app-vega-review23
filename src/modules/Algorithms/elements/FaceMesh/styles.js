import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: calc(100% - 130px);
    
    /* flex-direction: column; */

    #webcam {
        margin: 15px;
    }
    
    @media (min-width: 200px){
        #webcam {
            width: 50%;
            flex-direction: column;
        }
    }
    
    @media (max-width: 160px){
        #webcam {
            width: 70%;
            flex-direction: column;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1150px;
    height: 100%;
`;