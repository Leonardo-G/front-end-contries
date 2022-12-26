import React, { FC, useContext } from 'react';

import { ContainerImage } from '../image/ContainerImage';

import { CountryBox, CountryInfo } from '../../styled/components/country';
import { Text } from '../../styled/text';
import { UIContext } from '../../context/UI/UIContext';

interface Props {
    country: any;
}

export const Country: FC<Props> = ({ country }) => {
    
    const { isDark } = useContext( UIContext );
    
    return (
        <CountryBox dark={ isDark }>
            <ContainerImage 
                src={ country.flags.png }
                height='180px'
            />
            <CountryInfo>
                <Text size={ 16 } weight={ 600 }>{ country.name.common }</Text>
                <Text margin='15px 0 0 0' weight={ 600 }>
                    Population: <span className='greyText'>{ country.population.toLocaleString("es-AR") }</span>
                </Text>
                <Text weight={ 600 }>
                    Region: <span className='greyText'>{ country.region }</span>
                </Text>
                <Text weight={ 600 }>
                    Capital: <span className='greyText'>{ country.capital && country.capital[0] }</span>
                </Text>
            </CountryInfo>
        </CountryBox>
    )
}
