import React, { FC, useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons';

import { UIContext } from '../../context/UI/UIContext';

import { Box } from '../../styled/flexbox';
import { Container } from '../../styled/globals';
import { Navigation } from '../../styled/sections';
import { Text, Title } from '../../styled/text';

export const Nav: FC = () => {
    
    const { isDark, setIsDark } = useContext(UIContext);
    
    return (
        <Navigation dark={ isDark }>
            <Container>
                <Box flex between adjust colCenter>
                    <Title size={ 22 }>Where in the world?</Title>
                    <Box 
                        flex
                        pointer
                        onClick={ () => setIsDark( !isDark ) }  
                        colCenter  
                    >
                        <FontAwesomeIcon icon={ isDark ? faMoonSolid : faMoon }/> 
                        <Text size={ 16 } margin={ "0 0 0 10px" }>Dark Mode</Text>
                    </Box>
                </Box>
            </Container>
        </Navigation>
    )
}
