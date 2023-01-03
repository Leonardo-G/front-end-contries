import React, { MouseEvent, MouseEventHandler, useContext, useState } from 'react'

import { faAngleDown, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { UIContext } from '../../context/UI/UIContext'

import { Box } from '../../styled/flexbox'
import { Text } from '../../styled/text';

const Select = styled.div`
    position: absolute;
    top: 110%;
    left: 0;
    width: 100%;
    background: ${ ({ dark, shadow }: { dark?: boolean, shadow?: string }) => dark ? "hsl(209,23%,22%)" : "#fff" };
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    z-index: 99;
    border-radius: 6px;
    row-gap: 5px;
    box-shadow: ${ ({ shadow }) => shadow ? shadow : "none" };
    p{
        text-transform: capitalize;
        &:hover{
            text-decoration: underline;
        }
    }
`

export const SelectComponent = () => {
    
    const { isDark, setSearch } = useContext( UIContext );
    const [ value , setValue ] = useState("Filter by Region");
    const [openSelect, setOpenSelect] = useState(false);

    const handleSearchRegion = (e: MouseEvent<HTMLParagraphElement>) => {
        setValue( e.currentTarget.innerText )
        setSearch(e.currentTarget.innerText);
    }
    
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
            onClick={ () => setOpenSelect( !openSelect ) }
        >
            <Text size={16}>{ value }</Text>
            <FontAwesomeIcon 
                icon={ openSelect ? faAngleDown : faAngleRight }
                size="xs"
            />
            {
                openSelect &&
                <Select 
                    dark={ isDark }
                    shadow={`0px 2px 5px 4px ${ isDark ? "hsl(207, 26%, 17%)" : "#8585851f"}`}    
                >
                    <Text size={ 16 } onClick={ handleSearchRegion } >Africa</Text>
                    <Text size={ 16 } onClick={ handleSearchRegion } >America</Text>
                    <Text size={ 16 } onClick={ handleSearchRegion } >Asia</Text>
                    <Text size={ 16 } onClick={ handleSearchRegion } >Europe</Text>
                    <Text size={ 16 } onClick={ handleSearchRegion } >Oceania</Text>
                </Select>
            }
        </Box>
    )
}
