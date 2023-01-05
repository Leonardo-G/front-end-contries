import styled from "styled-components";

export const ButtonStyled = styled.button`
    background: ${ ({ colorBack }: { 
        colorBack: string; 
        shadow?: string; 
        dark: boolean;
        inline?: boolean;
        padding: string;
        margin?: string;
    }) => colorBack ? colorBack : "transparent" };
    outline: none;
    display: ${ ({ inline }) => inline ? "inline-block" : "flex" };
    align-items: center;
    column-gap: 10px;
    padding: ${ ({ padding }) => padding };
    border-radius: 6px;
    border: none;
    box-shadow: ${ ({ shadow }) => shadow ? shadow : "none" };
    margin: ${ ({ margin }) => margin ? margin : "50px 0 0 0"};
    cursor: pointer;
    color: ${ ({ dark }) => dark ? "#fff" : "#000" }
`