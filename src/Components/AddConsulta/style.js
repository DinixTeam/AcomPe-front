import styled from 'styled-components';

export const Container = styled.div`

    grid-area: AP;
    width: '20vw'; 
    /* background: '#ECCFF9'; */
    background-color: '#7698DB';
    border-radius: '15px';
    height: '47px';
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        background-color: #d69af0;
        margin-top: 50px;
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
export const Paciente = styled.div`
    display: flex;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #7698DB;
    flex-direction: row;
    align-items: center;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    height: 60px;
    width: 300px;
    margin-bottom: 2px;
    img {
        margin-left: 15px;
        background-color: #C2D2CA;
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
    h1{
        margin-left: 15px;
        font-size: 20px;
        color: white;
    }
`;