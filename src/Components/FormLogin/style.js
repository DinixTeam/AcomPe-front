import styled from 'styled-components';

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30vw;

    min-height: 350px;
    background-color: #d69af0;
    margin: auto;
    padding: 10px;
    border-radius: 20px;
    margin-top: -100px;
`;

export const Image = styled.img`
    margin-top: -30vh;
    
`;

export const Button = styled.div`
    background-color: #ECCFF9;
    padding: 10px;
    margin-bottom: 10px;
    width: 50%;
    text-align: center;
    display: flex;
    border-radius: 10px;
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