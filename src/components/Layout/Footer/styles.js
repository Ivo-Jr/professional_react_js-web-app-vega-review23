import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    
    height: 130px;
    
    background: black;
    
    border-top: 1px solid rgb(61, 61, 64);

    @media only screen and (max-width: 580px){
        height: auto;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0rem 9rem;

    width: 100%;

    @media only screen and (max-width: 740px){
        padding: 0rem 3rem;
        margin: 1rem 0rem;
    }

    @media only screen and (min-width: 1900px){
        padding: 0rem 10rem;
    }
`;

export const WrapperIcons = styled.ul``;

export const Icons = styled.li`
    display: flex;
    flex-wrap: wrap;
    margin-right: 2rem;
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

    @media only screen and (max-width: 580px){
        margin-right: 1rem;
    }

    @media only screen and (min-width: 1900px){
        a {
            padding: 1rem;
            margin: 1rem;

            img {
                width: 40px;
                height: 40px;
            }
        }
    }

`;

export const WrapperRights = styled.aside`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 412px){
        display: flex;
        flex-direction: column;
    }
`;

export const Rights = styled.p`
    width: 100%;
    min-width: 120px;
    
    color: var(--color-gray);
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    @media only screen and (min-width: 1900px){
        font-size: 1.8rem;
        line-height: 2.6rem;   
    }
`;
