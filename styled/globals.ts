import styled from "styled-components";

export const Theme = styled.div`
    background: ${ ({ dark }: { dark?: boolean, color?: string }) => dark ? "hsl(207, 26%, 17%)" : "#fff" };
    color ${ ({ dark }) => dark ? "#fff" : "#000" } ;
    width: 100%;
    height: 100%;    
    min-height: 100vh;
`

export const Container = styled.div`
    width: min(1440px, 95%);
    margin: 0 auto;
`
