import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    margin: 0 0 0 0;
    background-color: #161a1e;

    input {
        width: 63%;
        color: #6b6b6b;
        font-weight: regular;
        font-size: 1em;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 30px;
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 10px;
    }

    button {
        display: grid;
        justify-content: end;
        color: white;
        background: #F55E34;
        margin-top: 5px;
        margin-left: 30px;
        margin-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 19px;
        padding-bottom: 19px;
        font-weight: regular;
        font-size: 1.25rem;
        text-decoration: none;
        border: none;
        cursor: pointer;
        border-radius: 0.5rem;
    
    &:hover{
        background: white;
        color: black;
        transition: 1s;
    }
}
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 1px;

    > img {
        width: 250px;
        height: 250px;
    }
`;

export const Form = styled.form`
    width: 300px;
    height: 300px;
    padding: 30px;
    border-radius: 10px;
`;


