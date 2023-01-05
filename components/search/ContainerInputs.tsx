import React from 'react'

import { SelectComponent } from './SelectComponent';
import { InputComponent } from './InputComponent';

import styled from 'styled-components';

const BoxContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 35px; 

    @media (max-width: 920px){
        flex-direction: column;
        row-gap: 25px;
    }
`

export const ContainerInputs = () => {
    return (
        <BoxContainer>
            <InputComponent />
            <SelectComponent />
        </BoxContainer>
    )
}
