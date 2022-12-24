import styled from "styled-components";

export const ImageBox = styled.div`
    position: relative;
    height: ${ ({ height }: { height?: string, width?: string }) => height ? height : "100%"};
    width: ${ ({ width }) => width ? width : "100%"};
`