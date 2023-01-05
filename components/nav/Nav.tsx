import React, { FC, useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons';

import { UIContext } from '../../context/UI/UIContext';

import { Box } from '../../styled/flexbox';
import { Container } from '../../styled/globals';
import { Navigation } from '../../styled/sections';
import { Text, Title } from '../../styled/text';
import styled from 'styled-components';

const NavPage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 620px){
        row-gap: 15px;
        flex-direction: column;
    }
`


export const Nav: FC = () => {
    
    const { isDark, setIsDark } = useContext(UIContext);
    
    return (
        <Navigation dark={ isDark }>
            <Container>
                <NavPage>
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
                </NavPage>
            </Container>
        </Navigation>
    )
}
