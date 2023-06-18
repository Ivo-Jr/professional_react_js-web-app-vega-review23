import styled from 'styled-components';

export const ButtonToTop = styled.a`
    margin: 7px 15px 7px 7px;
    padding: 5px;
    
    background: #333;

    border-radius: 4px;

    transition: all 0.3s;

    svg {
        width: 18px;
        height: 18px;

        fill: var(--color-white);
    }

    &:hover{
        transform: scale(1.1);

        background: var(--color-wine);
    }
`;