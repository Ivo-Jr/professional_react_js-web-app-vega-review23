import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    /* height: calc(100% - 80px); */

    position: relative;
    
    background-image: linear-gradient(180deg, black, #0C0D0F);

    @media (max-width: 414px) {
            /* background-color: green; */
            /* height: 20%; */
            /* overflow: hidden; */
            /* font-size: 20px;
            margin-top: -50px; */
        }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    transform: translate(0px, -100px);

    flex-direction: column;

    width: 100%;

    z-index: 1;
`;


export const SVideo = styled.div`
    display: flex;
    justify-content: center;
    
    filter: brightness(.7);

    #videoBanner {
        width: 80%;
        border-radius: 10px;
    }

    @media (min-width: 1000px){
        #videoBanner {
            /* width: 100%; */
            /* height: 60%; */
        }
    }

    @media (max-width: 414px) {
            /* background-color: red; */
            width: 100%;
            /* margin-top: 10px; */
    }


`;

export const WrapperText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
`;

export const Div = styled.div`
    width: 2.5px;
    height: 90px;

    margin: 60px 0px 10px;

    background: 
        linear-gradient(180deg,var(--color-wine) 10%,
            rgba(153,109,255,0) 100%);
`;

export const Subtitle = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 20px 24px;
    /* padding-bottom: 80px; */

    width: 100%;
    max-width: 1100px;

    font-size: 40px;
    line-height: 54px;
    font-weight: 700;
    color: white;
    
    text-align: center;

    @media only screen and (max-width: 899px){
        padding: 0 3rem;
        font-size: 3.5rem;
    }

    @media only screen and (max-width: 590px){
        font-size: 2.8rem;
        line-height: 4.8rem;
        margin: 2.4rem 0rem;
    }
`;

export const SText = styled.div`
    display: flex;
    width: 100%;
    margin-top: 110px;
    margin-bottom: 110px;
    span {
        z-index: 1;
        line-height: 1.5;
        font-size: 55px;
        align-items: center;
        text-align: center;
        justify-content: center;
        justify-items: center;
        color: #FFF;
        font-weight: regular;
        text-decoration: none;
        text-align: center;
        margin: 0 auto;

        -webkit-animation: fadeinup 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadeinup 2s; /* Firefox < 16 */
        -ms-animation: fadeinup 2s; /* Internet Explorer */
        -o-animation: fadeinup 2s; /* Opera < 12.1 */
        animation: fadeinup 2s;
        @media (max-width: 414px) {
            /* background-color: red; */
            font-size: 20px;
            margin-top: -50px;
        }
}
`;