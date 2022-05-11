import styled from 'styled-components';

export const Container = styled.div`
    grid-area: ME;
    background-color: #7698DB;

    button {
        position: fixed;
        margin-top: 10px;
        background-color: #D190EE;
        border: none;
        color: white;
        height: 40px;
        width: 190px;
        border-radius: 20px;
        cursor: pointer;
        font-size: 1.3vw;
    }
`;

export const Input = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;

    
    h2 {
        font-size: 12px;
        margin-left: 10px;
        margin-bottom: 1px;
        font-family: 'Quicksand', 'Poppins',sans-serif;
    }

    input { 
        background: #ECCFF9;
        border-radius: 15px;
        height: 45px;
        width: 20vw;
        padding: 10px;
        border: 1px solid #C2D2CA;
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
    width: 99%;
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

export const ButtonAdd = styled.div`
    display: flex;
    position:fixed;
    border: 1px solid transparent;
    padding: 1px 5px;
    margin-top: 10px;
    background-color: #D190EE;
    color: white;
    height: 40px;
    border-radius: 20px;
    bottom: 10px;
    font-size: 1.3vw;
    justify-content: center;
    font-weight: bold;
    align-items: center;
    text-align: center;
    align-self: flex-end;
    width: 17%;
    margin-right: 1%;
    cursor: pointer;
    :hover{
      transition: all linear 0.3s;
      color: #E5F3ED;
      background: linear-gradient(0deg, rgba(229, 243, 237, 0.2), rgba(229, 243, 237, 0.2)), #D190EE;
    }
   
    @media (max-width: 1310px) {
        width: 18%;
        font-size: 1.2vw;
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        width: 30%;
        font-size: 1.8vw;
        right: 0;
    }
`;