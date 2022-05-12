import styled from 'styled-components';


export const Container = styled.div`
    /* grid-area: AP; */
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
        width: 20vw;
        padding: 10px;
        border: 1px solid #C2D2CA;
    }
`;