import React, { Dispatch, FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons';

import { Box } from '../../styled/flexbox';
import { Container } from '../../styled/globals';
import { Navigation } from '../../styled/sections';
import { Text, Title } from '../../styled/text';

interface Props {
    dark?: boolean; 
    changeDark: Dispatch<React.SetStateAction<boolean>>;
}

export const Nav: FC<Props> = ({ dark, changeDark }) => {
    return (
        <Navigation dark={ dark }>
            <Container>
                <Box flex between adjust colCenter>
                    <Title size={ 22 }>Where in the world?</Title>
                    <Box 
                        flex
                        pointer
                        onClick={ () => changeDark( isDark => !isDark ) }    
                    >
                        <FontAwesomeIcon icon={ dark ? faMoonSolid : faMoon }/> 
                        <Text size={ 16 } margin={ "0 0 0 10px" }>Dark Mode</Text>
                    </Box>
                </Box>
            </Container>
        </Navigation>
    )
}
