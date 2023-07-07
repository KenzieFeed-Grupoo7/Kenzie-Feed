import styled from "styled-components";

export const StyledMain = styled.main`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1rem;
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
    ul{
        width:50vw;
        height:370px;
        display:flex;
        flex-wrap:nowrap;
        gap:1rem;
        overflow-x: auto;
    }
    figure > img{
        max-width:500px;
        max-height:350px;
    }
    figure{
        width:500px;
        height:350px;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`