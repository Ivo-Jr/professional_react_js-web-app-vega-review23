import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 130px);

    background: var(--color-white);
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    padding: 3rem 2rem 2rem;
    
    width: 100%;
    max-width: 1150px;
    height: 100%;
`;

export const Text = styled.div`
    margin-bottom: 10px;

    font-size: 3rem;
    font-weight: bold;
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
`;


