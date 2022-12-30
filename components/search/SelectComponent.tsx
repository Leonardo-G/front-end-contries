import { faAngleDown, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import { UIContext } from '../../context/UI/UIContext'
import { Box } from '../../styled/flexbox'
import { Text } from '../../styled/text';

export const SelectComponent = () => {
    
    const { isDark } = useContext( UIContext );
    const [ value , setValue ] = useState("Filter by Region");
    const [openSelect, setOpenSelect] = useState(false);
    
    return (
        <Box
            flex 
            colorBack={ isDark ? "hsl(209, 23%, 22%)" : "#fff" }
            padding="0 25px"
            colCenter
            colGap={ 40 }
            borderRadius="6px"
            pointer
            shadow={`0px 2px 5px 4px ${ isDark ? "hsl(207, 26%, 17%)" : "#8585851f"}`}
        >
            <Text>Filter by Region</Text>
            <FontAwesomeIcon 
                icon={ openSelect ? faAngleRight : faAngleDown }
                size="xs"
            />
        </Box>
    )
}
