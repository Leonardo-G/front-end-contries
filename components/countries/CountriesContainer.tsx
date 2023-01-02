import React, { FC, useContext } from 'react'

import { UIContext } from '../../context/UI/UIContext';
import { Country } from './Country';

import { ICountryShort } from '../../interfaces/country';


interface Props{
    countries: ICountryShort[];
}

export const CountriesContainer:FC<Props> = ({ countries }) => {
    
    const { isDark } = useContext( UIContext );

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(225px, 1fr))",
                columnGap: "80px",
                rowGap: "80px",
                margin: "35px 0"
            }}
        >
            {
                countries.map( c => (
                    <Country key={ c.name } country={ c } isDark={ isDark }/>
                ))
            }
        </div>
    )
}
