import React, { FC, useContext, useMemo } from 'react';

import { ContainerImage } from '../image/ContainerImage';

import { CountryBox, CountryInfo } from '../../styled/components/country';
import { Text } from '../../styled/text';
import { ICountryShort } from '../../interfaces/country';
import Link from 'next/link';

interface Props {
    country: ICountryShort;
    isDark: boolean;
}

export const Country: FC<Props> = ({ country, isDark }) => {
    
    return (
        <Link href={ `country/${ country.name.toLowerCase() }` }>
            <CountryBox dark={ isDark }>
                <ContainerImage 
                    src={ country.img }
                    height='180px'
                />
                <CountryInfo>
                    <Text size={ 16 } weight={ 600 } color={ isDark ? "#fff" : "#000" }>{ country.name }</Text>
                    <Text margin='15px 0 0 0' weight={ 600 } color={ isDark ? "#fff" : "#000" }>
                        Population: <span className='greyText'>{ country.population }</span>
                    </Text>
                    <Text weight={ 600 } color={ isDark ? "#fff" : "#000" }>
                        Region: <span className='greyText'>{ country.region }</span>
                    </Text>
                    <Text weight={ 600 } color={ isDark ? "#fff" : "#000" }>
                        Capital: <span className='greyText'>{ country.capital && country.capital[0] }</span>
                    </Text>
                </CountryInfo>
            </CountryBox>
        </Link>
    )
}
