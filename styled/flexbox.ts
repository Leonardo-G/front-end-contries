import styled from 'styled-components';

export const Box = styled.div`
    position: relative;
    display: ${ ({ flex }: { 
        flex?: boolean;
        between?: boolean; 
        around?: boolean;
        adjust?: boolean;
        colCenter?: boolean;
        margin?: string;
        pointer?: boolean;
        colorBack?: string;
        padding?: string;
        colGap?: number;
        minWidth?: string;
        borderRadius?: string;
        shadow?: string;
        inline?: boolean;
    }) => flex ? "flex" : "normal" };
    width: ${ ({ adjust }) => adjust ? "100%" : "auto"};
    min-width: ${ ({ minWidth }) => minWidth ? minWidth : "auto"};
    justify-content: ${ ({ between, around }) => between ? "space-between" : around ? "space-around" : "normal" };
    align-items: ${ ({ colCenter }) => colCenter ? "center" : "normal" };
    cursor: ${ ({ pointer }) => pointer ? "pointer" : "normal" };
    margin: ${ ({ margin }) => margin ? margin : "0px" };
    background: ${ ({ colorBack }) => colorBack ? colorBack : "transparent" };
    padding: ${ ({ padding }) => padding ? padding : "0px" };
    column-gap: ${ ({ colGap }) => colGap ? `${ colGap }px` : "0px" };
    border-radius: ${ ({ borderRadius }) => borderRadius ? borderRadius : "0px" };
    box-shadow: ${ ({ shadow }) => shadow ? shadow : "none" };
`