import styled from 'styled-components';

export const Box = styled.div`
    position: relative;
    display: ${ ({ flex }: { 
        flex?: boolean, 
        between?: boolean, 
        around?: boolean, 
        adjust?: boolean,
        colCenter?: boolean,
        margin?: string,
        pointer?: boolean
    }) => flex ? "flex" : "normal" };
    width: ${ ({ adjust }) => adjust ? "100%" : "fit-content"};
    justify-content: ${ ({ between, around }) => between ? "space-between" : around ? "space-around" : "normal" };
    align-items: ${ ({ colCenter }) => colCenter ? "center" : "normal" };
    cursor: ${ ({ pointer }) => pointer ? "pointer" : "normal" }
`