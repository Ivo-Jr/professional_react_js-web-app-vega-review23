import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    
    height: 130px;
    
    background: black;
    
    border-top: 1px solid rgb(61, 61, 64);
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1150px;
`;

export const WrapperIcons = styled.ul``;

export const Icons = styled.li`
    display: flex;
    align-items: center;

    a {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 7px;
        padding: 7px;
        background-color: #333;
        border-radius: 5px;

        transition: all 0.3s ease;

        svg{
            width: 28px;
            height: 28px;

            fill: var(--color-white);
            opacity: .6;
        }
    }
    
    a:hover{
        transform: scale(1.08);
        background: var(--color-wine);
                
        svg{
            fill: var(--color-white);
            opacity: 1;
        }
    }

`;

export const WrapperRights = styled.aside`
    display: flex;
    align-items: center;
`;

export const Rights = styled.p`
    color: var(--color-gray);
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
`;
