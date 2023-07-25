import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    min-height: 100%;

    padding: 19rem 2rem;

    background: var(--color-white);
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    width: 100%;
    max-width: 1150px;
`;

export const Text = styled.div`
    margin-bottom: 10px;

    font-size: 3rem;
    font-weight: bold;

    @media only screen and (min-width: 1900px){
        font-size: 4rem;
        margin-bottom: 3rem;
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;

    flex-direction: column;

    width: 100%;
    max-width: 750px;

    select {
        padding: 15px;
        margin: 10px 0px;
        
        color: #6b6b6b;

        border-radius: 3px;
        border: 1px solid #333;
    }

    input {
        padding: 15px;
        margin: 10px 0px;
 
        color: #6b6b6b;
        
        border-radius: 3px;
        border: 1px solid #333;
    }

    textarea {
        padding: 15px;
        margin: 10px 0px;
 
        width: 100%;
        max-width: 750px;
        min-height: 80px;
        
        color: #6b6b6b;
        font-family: 'Roboto', sans-serif;
        border-radius: 3px;
        border: 1px solid #333;
    }

    button {
        color: white;
        background: #F55E34;

        width: 100%;
        max-width: 100px;

        margin-top: 20px;
        padding: 20px;

        font-weight: bold;
        font-size: 1.25rem;
        text-decoration: none;
        
        border: none;
        cursor: pointer;
        border-radius: 0.5rem;
    
        &:hover{
            background-color: #ccc;
            color: black;
            transition: 1s;
        }
    
    }

    @media only screen and (min-width: 1900px){
        max-width: 1050px;

        select {
            margin: 1.5rem 0rem;
            /* height: 5rem; */
            font-size: 2.1rem;
        }

        input {
            height: 5rem;
            font-size: 2.1rem;
        }

        textarea {
            font-size: 2.1rem;
            min-width: 100%;
            margin-bottom: 4rem
        }

        button {
            font-size: 2rem;
            padding: 2rem 5rem;
            width: max-content;
            max-width: initial;
        }
    }
`;


