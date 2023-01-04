import React, { useContext } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { LayoutPage } from '../../components/layout/LayoutPage'
import { ICountry, ICountryMedium } from '../../interfaces/country'
import { Container } from '../../styled/globals';
import { Button } from '../../components/UI/Button';
import { UIContext } from '../../context/UI/UIContext';
import { Box } from '../../styled/flexbox';
import { ContainerImage } from '../../components/image/ContainerImage';
import { Text, Title } from '../../styled/text';
import { returnLanguages, returnNativeName } from '../../utils/country';

interface Props {
    country: ICountryMedium;
}

const CountryPage: NextPage<Props> = ({ country }) => {
    console.log(returnLanguages( country.languages ))
    const { isDark } = useContext( UIContext );

    return (
        <LayoutPage title={` Country | ${country.name} `}>
            <Container>
                <Button isDark={ isDark }/>
                <Box 
                    flex
                    colCenter
                    colGap={ 150 }
                    margin="80px 0 0 0"
                >
                    <Box flexAuto>
                        <ContainerImage 
                            src={ country.img }
                            height={ "400px" }
                        />
                    </Box>
                    <Box flexAuto>
                        <Title size={ 28 }>{ country.name }</Title>
                        <Box flex between margin='40px 0 0 0'>
                            <Box>
                                <Text size={ 16 } weight={ 600 } color={ isDark ? "#fff" : "hsl(209, 23%, 22%)" }>
                                    Native Name: <span className='greyText'>
                                        { returnNativeName( country.nativeName ) }
                                    </span>
                                </Text>
                                <Text size={ 16 } margin='15px 0 0 0' weight={ 600 } color={ isDark ? "#fff" : "hsl(209, 23%, 22%)" }>
                                    Populaton: <span className='greyText'>{ country.population }</span>
                                </Text>
                                <Text size={ 16 } margin='15px 0 0 0' weight={ 600 } color={ isDark ? "#fff" : "hsl(209, 23%, 22%)" }>
                                    Region: <span className='greyText'>{ country.region }</span>
                                </Text>
                                <Text size={ 16 } margin='15px 0 0 0' weight={ 600 } color={ isDark ? "#fff" : "hsl(209, 23%, 22%)" }>
                                    Sub Region: <span className='greyText'>{ country.subregion }</span>
                                </Text>
                                <Text size={ 16 } margin='15px 0 0 0' weight={ 600 } color={ isDark ? "#fff" : "hsl(209, 23%, 22%)" }>
                                    Capital: <span className='greyText'>{ country.capital }</span>
                                </Text>
                            </Box>
                            <Box>
                                <Text size={ 16 } margin='15px 0 0 0' weight={ 600 } color={ isDark ? "#fff" : "hsl(209, 23%, 22%)" }>
                                    Top Level Domain: <span className='greyText'>{ country.tld }</span>
                                </Text>
                                <Text size={ 16 } margin='15px 0 0 0' weight={ 600 } color={ isDark ? "#fff" : "hsl(209, 23%, 22%)" }>
                                    Currencies: <span className='greyText'>{ country.curriences[Object.keys(country.curriences)[0]].name }</span>
                                </Text>
                                <Text size={ 16 } margin='15px 0 0 0' weight={ 600 } color={ isDark ? "#fff" : "hsl(209, 23%, 22%)" }>
                                    Languages: <span className='greyText'>{ returnLanguages( country.languages ) }</span>
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </LayoutPage>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const data = await fetch("https://restcountries.com/v3.1/all");
    const results: ICountry[] = await data.json();

    return {
        paths: results.map( c => ({
            params: {
                name: c.name.common 
            }
        })),
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string }

    const data = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const results: ICountry[] = await data.json();

    const country = results.map((c): ICountryMedium => ({
        name: c.name.common,
        img: c.flags.png,
        population: c.population.toLocaleString("es-AR"),
        region: c.region,
        capital: c.capital,
        nativeName: c.name.nativeName,
        tld: c.tld,
        curriences: c.currencies,
        languages: c.languages,
        subregion: c.subregion
    }))
    
    return {
        props: {
            country: JSON.parse( JSON.stringify(country[0]) )
        }
    }
}

export default CountryPage