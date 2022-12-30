import React, { FC, useContext, useMemo } from 'react';

import { ContainerImage } from '../image/ContainerImage';

import { CountryBox, CountryInfo } from '../../styled/components/country';
import { Text } from '../../styled/text';
import { ICountryShort } from '../../interfaces/country';

interface Props {
    country: ICountryShort;
    isDark: boolean;
}

export const Country: FC<Props> = ({ country, isDark }) => {
    
    return (
        <CountryBox dark={ isDark }>
            <ContainerImage 
                src={ country.img }
                height='180px'
            />
            <CountryInfo>
                <Text size={ 16 } weight={ 600 }>{ country.name }</Text>
                <Text margin='15px 0 0 0' weight={ 600 }>
                    Population: <span className='greyText'>{ country.population }</span>
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
