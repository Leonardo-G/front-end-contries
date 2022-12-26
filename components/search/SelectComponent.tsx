import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { UIContext } from '../../context/UI/UIContext'
import { Box } from '../../styled/flexbox'
import { Text } from '../../styled/text';

export const SelectComponent = () => {
    
    const { isDark } = useContext( UIContext );
    
    return (
        <Box
            flex 
            colorBack={ isDark ? "hsl(209, 23%, 22%)" : "#fff" }
            padding="0 25px"
            colCenter
            colGap={ 40 }
            borderRadius="6px"
        >
            <Text>Filter by Region</Text>
            <FontAwesomeIcon 
                icon={ faAngleRight }
                size="xs"
            />
        </Box>
    )
}
