import styled from "styled-components";

export const Input = styled.input`
    background: transparent;
    outline: none;
    border: none;
    padding: 10px 5px;
    color: ${ ({ dark }: { dark?: boolean }) => dark ? "#fff" : "#000" };
`