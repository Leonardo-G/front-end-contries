import styled from "styled-components";

export const Navigation = styled.nav`
    background: ${({dark}: { dark?: boolean }) => dark ? "hsl(209, 23%, 22%)" : "#fff"};
    padding: 20px 0;
    border-bottom: 1px solid ${ ({ dark }) => dark ? "hsl(207, 26%, 17%)" : "#e9e9e9"} ;
`