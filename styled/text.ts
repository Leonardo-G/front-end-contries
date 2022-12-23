import styled from "styled-components";

export const Title = styled.h1`
    font-size: ${ ({ size }: { size?: number }) => size ? `${ size }px` : "16px" };
    font-weight: 600;
`

export const Text = styled.p`
    font-size: ${ ({ size }: { size?: number, margin?: string }) => size ? `${ size }px` : "14px" };
    margin: ${ ({ margin }) => margin ? margin : "0" };
`