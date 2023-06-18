import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #FFFFFF;
`;

export const Form = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;

    label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 20px;
    }

    input {
        width: 92%; // Altere de '63%' para '100%'
        color: #6b6b6b;
        font-weight: regular;
        font-size: 1em;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 30px; // Altere de '30px' para '0'
        margin-right: 0; // Altere de '30px' para '0'
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 10px;
    }

    h1 {
        color: #2e2e2e;
        font-weight: bold; // Altere de 'none' para 'normal'
        font-size: 1.8em;
        line-height: 1.2; // Altere de '0' para '1.2'
        text-decoration: none;
        margin: 40px 30px 30px 30px;
    }

    h2 {
        color: #2e2e2e;
        font-weight: normal; // Altere de 'none' para 'normal'
        font-size: 1.5em;
        line-height: 1.2; // Altere de '0' para '1.2'
        text-decoration: none;
        margin: 20px 30px 30px 30px;
    }

    h3 {
        color: #2e2e2e;
        font-weight: normal; // Altere de 'none' para 'normal'
        font-size: 1.2em;
        line-height: 1.2; // Altere de '0' para '1.2'
        text-decoration: none;
        margin: 20px 30px 30px 30px;
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

    export const ThankYouMessage = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center; // Altere de 'flex-start' para 'center'
        justify-content: center; // Adicione 'justify-content'
        width: 100%;
        height: 100%; // Adicione 'height'
        margin-bottom: 20px;

    h2 {
        color: #2e2e2e;
        font-weight: normal; // Altere de 'none' para 'normal'
        font-size: 1.8em;
        line-height: 1.2; // Altere de '0' para '1.2'
        text-decoration: none;
        margin: 40px 30px 30px 30px;
    }

    p {
        color: #2e2e2e;
        font-weight: normal; // Altere de 'none' para 'normal'
        font-size: 1.4em;
        line-height: 1.2; // Altere de '0' para '1.2'
        text-decoration: none;
        margin: 20px 30px 30px 30px;
    }
`;














  

  
