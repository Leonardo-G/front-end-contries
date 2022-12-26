import React from 'react'

import { InputComponent } from './InputComponent'

import { Box } from '../../styled/flexbox'
import { SelectComponent } from './SelectComponent'


export const ContainerInputs = () => {
    return (
        <Box flex between margin='35px 0 0 0'>
            <InputComponent />
            <SelectComponent />
        </Box>
    )
}
