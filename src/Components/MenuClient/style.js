import styled from 'styled-components';

export const Container = styled.div`
    grid-area: ME;
    background-color: #7698DB;
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