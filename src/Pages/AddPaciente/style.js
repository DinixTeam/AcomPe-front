import styled from "styled-components";


export const Grid = styled.div`
    display: grid;

    grid-template-columns: 100% auto;
    grid-template-rows: 60px auto;
    grid-template-areas: 
            'TB'
            'AP'
    ;
    height: 100vh;
`;