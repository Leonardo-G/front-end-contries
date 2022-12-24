import React, { FC } from 'react';

import { ContainerImage } from '../image/ContainerImage';

import { CountryBox, CountryInfo } from '../../styled/components/country';
import { Text } from '../../styled/text';

interface Props {
    country: any;
}

export const Country: FC<Props> = ({ country }) => {
    return (
        <CountryBox>
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
