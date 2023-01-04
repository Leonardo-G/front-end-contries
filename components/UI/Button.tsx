import { faArrowLeft, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react'
import { Box } from '../../styled/flexbox';
import { Text } from '../../styled/text';
import { ButtonStyled } from '../../styled/components/button';

interface Props {
    isDark: boolean;
}

export const Button: FC<Props> = ({ isDark }) => {

    return (
        <ButtonStyled
            colorBack={ isDark ? "hsl(209, 23%, 22%)" : "#fff" }
            shadow={`0px 2px 5px 4px ${ isDark ? "hsl(207, 26%, 17%)" : "#4641411f"}`}
            dark={ isDark }
        >
            <FontAwesomeIcon 
                icon={ faArrowLeftLong }
                style={{
                    fontSize: "20px"
                }}    
            />
            <Text size={ 16 }>Back</Text>
        </ButtonStyled>
    )
}
