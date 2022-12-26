import styled from "styled-components";

export const CountryBox = styled.div`
    border: 1px solid ${ ({ dark }: { dark?: boolean }) => dark ? "hsl(207, 26%, 17%)" : "#e9e9e9"} ;
    background: ${ ({ dark }) => dark ? "hsl(209, 23%, 22%)" : "#fff" };
    flex-direction: column;
    border-radius: 6px;
    overflow: hidden;
`

export const CountryInfo = styled.div`
    padding: 25px 25px;
`