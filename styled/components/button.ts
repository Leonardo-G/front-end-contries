import styled from "styled-components";

export const ButtonStyled = styled.button`
    background: ${ ({ colorBack }: { colorBack: string, shadow: string, dark: boolean }) => colorBack ? colorBack : "transparent" };
    outline: none;
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding: 10px 40px;
    border-radius: 6px;
    border: none;
    box-shadow: ${ ({ shadow }) => shadow ? shadow : "none" };
    margin-top: 50px;
    cursor: pointer;
    color: ${ ({ dark }) => dark ? "#fff" : "#000" }
`