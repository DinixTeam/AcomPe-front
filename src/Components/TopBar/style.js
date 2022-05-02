import styled from 'styled-components';

export const Container = styled.div`
    grid-area: TB;
    background-color: var(--primary);
    display: flex;
    place-items: center;
    justify-content: space-between;
    position: initial;
    border-bottom: 2px solid #7ea1ed;

    width: 100%;
`;



export const Image = styled.img`
    width: 200px;
    margin-top: 5px;
`;

export const User = styled.div`
    background-color: var(--secondary);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 15px;
    cursor: pointer;
`;