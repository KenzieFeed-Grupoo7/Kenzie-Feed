import styled from "styled-components";

export const StyledDiv = styled.div`
        display:flex;
        flex-direction:column;
        gap:1rem;
        text-align:center;
        div{
            display	:flex;
            width:100%;
            flex-direction:row;
            justify-content:space-between;
        }
        ul{
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
        }
`