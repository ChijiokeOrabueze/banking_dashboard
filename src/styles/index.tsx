import styled from "styled-components";


export const FlexRow = styled.div`
    display: flex;
    align-items: center;
    gap: ${({gap}:{gap:number})=>gap || 10}px;

`

export const FlexApart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`