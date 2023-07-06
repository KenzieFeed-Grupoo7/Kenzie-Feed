import styled from "styled-components"

export const StyledFieldBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    p {
        color: red;
        font-size: clamp(0.50rem, 7vw, 0.75rem);
        margin-bottom: 0.5rem;
        height: 0.75rem;
    }
`

export const StyledInput = styled.input`
    font-family: var(--font-secondary);
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.0625rem;
    font-weight: 400;

    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: .25rem;

    height: 3.5rem;
    padding: 0 1.25rem;
`

export const StyledLabel = styled.label`
    font-family: var(--font-secondary);
    color: var(--color-black);
    line-height: 1.6;
    font-weight: 700;
    font-size: .875rem;
`
