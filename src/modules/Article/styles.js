import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    width: 100%;
    height: 100%;

    background: var(--color-background);
    
    padding-bottom: 80px;
`;

export const Text = styled.h1`
    margin: 40px 30px 30px 30px;

    color: var(--color-gray);
    font-weight: none;
    font-size: 1.8em;
    line-height: 0;
    text-decoration: none;
`;

export const Controllers = styled.div`
    display: flex;
    align-items: center;
    
    width: 100%;
    max-width: 1150px;

    flex-wrap: wrap;

    padding: 10px;

    
    div {
        margin: 10px;
    }
`;

// export const Buttons = styled.div`
//     width: 100%;
//     height: 100%;
//     button, link {
//         margin-bottom: 30px;
//         justify-content: center; 
//         margin-top: 20px;
//         margin-bottom: 20px;
//         margin-left: 30px;
//         margin-right: 30px;
//         color: white;
//         background: #F55E34;
//         padding-left: 32px;
//         padding-right: 32px;
//         padding-top: 19px;
//         padding-bottom: 19px;
//         font-weight: regular;
//         font-size: 1.25rem;
//         text-decoration: none;
//         border: none;
//         cursor: pointer;
//         border-radius: 0.5rem;
        
//         &:hover{
//             background-color: #ccc;
//             color: black;
//             transition: 1s;
            
//         }
//     }
// `;
