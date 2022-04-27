import styled from "styled-components";

// TB - TopBar
// ME  - NenuEsquerda
// CS - Consultas

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 100% auto;
    grid-template-rows: 60px auto;
    grid-template-areas: 
        'TB TB'
        'ME CS'
    ;
    height: 100vh;
`;