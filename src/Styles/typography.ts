import styled, { css } from "styled-components"

export const TitleStyles = css`
    font-family: var(--font-primary);
    color: var(--color-black);
    line-height: 1.6;
    font-weight: 700;
`

export const StyledTitleOne = styled.h1`
    ${TitleStyles}
    font-size: clamp(2.125rem, 7vw, 3.25rem);
`

export const StyledTitleTwo = styled.h2`
    ${TitleStyles}
    font-size: clamp(1.875rem, 7vw, 2.75rem);
`

export const StyledTitleThree = styled.h4`
    ${TitleStyles}
    font-size: 1.4375rem;
`

export const StyledTitlePost = styled.h3`
    ${TitleStyles}
    font-size: clamp(1.75rem, 7vw, 2.25rem);
`

interface IStyledParagraphProps{
    fontStyle: "lg" | "sm";
}

export const StyledParagraph = styled.p<IStyledParagraphProps>`
    font-family: var(--font-secondary);
    color: var(--color-black);
    line-height: 1.6;
    font-weight: 400;

    ${({fontStyle}) => {
        switch(fontStyle){
            case "sm":
                return css`
                    font-size: .875rem;
                `
            case "lg":
                return css`
                    font-size: clamp(1.0625rem, 7vw, 1.125rem);
                `
        }
    }}
`
