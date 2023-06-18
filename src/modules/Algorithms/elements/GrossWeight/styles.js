import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 130px);

    background-image: linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,1)), url(https://images.pexels.com/photos/12876612/pexels-photo-12876612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    background-size: 100%;
    background-position: bottom right;

    /* transform: scaleX(-1); */
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100%;
`;

export const Title = styled.h1`
    color: #333;
    margin-left: 2rem;
    margin-top: 30px;
    font-weight: regular;
    font-size: 3rem;
    text-decoration: none;
`;


export const Calc = styled.div`
    display: flex;

    width: 100%;

    flex-direction: column;
    padding-top: 0.15rem;
    padding-left: 2rem;
    padding-bottom: 3rem; 


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
input {
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
`;

export const Img = styled.div`
    display: flex;  
`;