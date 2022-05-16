import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AP;
    background-color: var(--primary);
    display: flex;
    place-items: center;
    justify-content: space-between;
    position: initial;    
    width: 100%;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    min-height: 350px;
    background-color: #7897da;
    margin: auto;
    padding: 10px;
    border-radius: 20px;
    margin-top: 10px;
`;

export const Image = styled.img`
    margin-top: -30vh;
`;

export const Button = styled.div`
    background-color: #D190EE;
    padding: 10px;
    margin-bottom: 10px;
    width: 4vw;
    height: 4vw;
    text-align: center;
    display: flex;
    border-radius: 50%;
    border: 1px solid transparent;
    justify-content: center;
    font-weight: bold;
    align-items: center;
    text-align: center;
    cursor: pointer;
`;

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    h2 {
        color: white;
        font-weight: bold;
        font-size: 12px;
        margin-left: 10px;
        margin-bottom: 1px;
        font-family: 'Quicksand', 'Poppins',sans-serif;
    }

    input { 
        background: #ECCFF9;
        border-radius: 15px;
        height: 45px;
        width: 40vw;
        padding: 10px;
        border: 1px solid #C2D2CA;
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
    width: 13%;
    margin-right: 30%;
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
    }
`;