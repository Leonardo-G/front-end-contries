import styled from "styled-components";

export const Title = styled.h1`
    font-size: ${ ({ size }: { size?: number }) => size ? `${ size }px` : "16px" };
    font-weight: 600;
`

export const Text = styled.p`
    font-size: ${ ({ size }: { size?: number, margin?: string, weight?: number, dark?: boolean, color?: string }) => size ? `${ size }px` : "14px" };
    margin: ${ ({ margin }) => margin ? margin : "0" };
    font-weight: ${ ({ weight }) => weight ? weight : 300 };
    line-height: 1.8;
    color ${ ({ color }) => color && color };

    .greyText{
        color: hsl(0, 0%, 52%);
    }

    .responsive{}

    @media (max-width: 480px){
        .responsive{
            display: block;
        }
    }
`