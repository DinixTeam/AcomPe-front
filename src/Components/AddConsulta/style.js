import styled from 'styled-components';

export const Container = styled.div`

    grid-area: AP;
    width: '20vw'; 
    /* background: '#ECCFF9'; */
    background: '#7698DB';
    border-radius: '15px';
    height: '47px';
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        background-color: #d69af0;
        margin-top: 50px;
        margin-bottom: 50px;
        border: none;
        width: 200px;
        height: 50px;
        border-radius: 20px;
        color: white;
        font-size: 1vw;
        font-weight: bold;
        cursor: pointer;
    }
`;