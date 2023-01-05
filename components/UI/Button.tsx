import { faArrowLeft, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react'
import { Box } from '../../styled/flexbox';
import { Text } from '../../styled/text';
import { ButtonStyled } from '../../styled/components/button';

interface Props {
    isDark: boolean;
    text: string;
    icon?: boolean;
}

export const Button: FC<Props> = ({ isDark, text, icon = false }) => {

    if ( icon ) {
        return (
            <ButtonStyled
                colorBack={ isDark ? "hsl(209, 23%, 22%)" : "#fff" }
                shadow={`0px 2px 5px 4px ${ isDark ? "hsl(207, 26%, 17%)" : "#4641411f"}`}
                dark={ isDark }
                padding="10px 40px"
            >
                <FontAwesomeIcon 
                    icon={ faArrowLeftLong }
                    style={{
                        fontSize: "20px"
                    }}    
                />
                <Text size={ 16 }>{ text }</Text>
            </ButtonStyled>
        )
    }

    return (
        <ButtonStyled
            colorBack={ isDark ? "hsl(209, 23%, 22%)" : "#fff" }
            shadow={`0px 2px 5px 4px ${ isDark ? "hsl(207, 26%, 17%)" : "#a7a4a41f"}`}
            dark={ isDark }
            inline
            padding="5px 10px"
            margin='2.5px 10px 2.5px 10px'
        >
            <Text size={ 16 }>{ text }</Text>
        </ButtonStyled>
    )
}
