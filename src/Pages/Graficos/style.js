import styled from "styled-components";

// TB - TopBar
// ME  - NenuEsquerda
// CS - Consultas

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 300px auto;
    grid-template-rows: 70px auto;
    grid-template-areas: 
        'TB TB'
        'CS CS'
    ;
    height: 100vh;
`;