import React, { useContext } from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '../../styled/flexbox';
import { UIContext } from '../../context/UI/UIContext';
import { Input } from '../../styled/components/inputs';

export const InputComponent = () => {
    
    const { isDark } = useContext( UIContext );
    
    return (
        <Box 
            flex 
            colCenter
            colGap={ 20 }
            padding='5px 30px'
            colorBack={ isDark ? "hsl(209, 23%, 22%)" : "#fff" }
            minWidth="490px"
            borderRadius='6px'
        >
            <FontAwesomeIcon 
                icon={ faSearch }
                size={ "lg" }
            />
            <Input 
                type="text"
                dark={ isDark }
                placeholder="Search for a country..."
            />
        </Box>
    )
}
