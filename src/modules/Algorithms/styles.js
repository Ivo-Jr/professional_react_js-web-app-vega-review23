import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    width: 100%;
    min-height: 100%;
    padding: 19rem 0rem;

    background: var(--color-background);
    
    padding-bottom: 80px;
`
export const Text = styled.h1`
    margin: 40px 30px 30px 30px;

    color: var(--color-gray);
    font-weight: none;
    font-size: 1.8em;
    line-height: 0;
    text-decoration: none;

    @media only screen and (min-width: 1900px){
        font-size: 3rem;
        margin-bottom: 6rem;
    }
`;

export const Controllers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    max-width: 1150px;

    flex-wrap: wrap;

    padding: 10px;

    
    div {
        margin: 10px;
    }
`;
