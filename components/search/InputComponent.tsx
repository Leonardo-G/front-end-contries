import React, { ChangeEvent, KeyboardEvent, KeyboardEventHandler, useContext, useState } from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '../../styled/flexbox';
import { UIContext } from '../../context/UI/UIContext';
import { Input } from '../../styled/components/inputs';

export const InputComponent = () => {
    
    const { isDark, setSearch } = useContext( UIContext );
    const [valueInput, setValueInput] = useState("");

    const handleSearchValue = () => {
        
        setSearch( valueInput );
    }

    const handleChangeValue = ( e: ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement> ) => {
        if ( ( e as KeyboardEvent<HTMLInputElement> ).key === "Enter" ){
            
            setSearch( valueInput );
            return;
        }
        
        setValueInput( (e as ChangeEvent<HTMLInputElement>).target.value )
    }
    
    return (
        <Box 
            flex 
            colCenter
            colGap={ 20 }
            padding='5px 30px'
            colorBack={ isDark ? "hsl(209, 23%, 22%)" : "#fff" }
            minWidth="490px"
            borderRadius='6px'
            shadow={`0px 2px 5px 4px ${ isDark ? "hsl(207, 26%, 17%)" : "#8585851f"}`}
        >
            <FontAwesomeIcon 
                icon={ faSearch }
                size={ "lg" }
                onClick={ handleSearchValue }
            />
            <Input 
                type="text"
                dark={ isDark }
                placeholder="Search for a country..."
                onChange={ handleChangeValue }
                onKeyDown={ handleChangeValue }
            />
        </Box>
    )
}
