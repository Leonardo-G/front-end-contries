import React, { FC } from 'react'
import { Country } from './Country';

interface Props{
    countries: any[];
}

export const CountriesContainer:FC<Props> = ({ countries }) => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(225px, 1fr))",
                columnGap: "80px",
                rowGap: "80px",
                marginTop: "35px"
            }}
        >
            {
                countries.map( c => (
                    <Country key={ c.area } country={ c }/>
                ))
            }
        </div>
    )
}
