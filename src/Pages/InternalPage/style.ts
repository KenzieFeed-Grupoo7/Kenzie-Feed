import styled from "styled-components";

export const StyledMain = styled.main`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1rem;

    height: 75vh;
    overflow: auto;
    
    .mainImg{
        border-radius:25px;
    }
    .likeContainer{
        display:flex;
        width:100%;
        justify-content:start;
        padding-left:15vw;
        gap:1rem;
    }
    .likeContainer> button> img{
        width:30px;
    }
`