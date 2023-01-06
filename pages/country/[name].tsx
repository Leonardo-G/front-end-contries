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
import { returnBorders, returnLanguages, returnNativeName } from '../../utils/country';
import styled from 'styled-components';

interface Props {
    country: ICountryMedium;
}

const PageCountry = styled.div`
    display: flex;
    margin-top: 80px;
    column-gap: 50px;
    
    @media (max-width: 920px){
        flex-direction: column;
        row-gap: 80px;
    }
`

const CountryInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    column-gap: 20px;

    @media (max-width: 480px){
        flex-direction: column;
    }
`

const CountryPage: NextPage<Props> = ({ country }) => {
    const { isDark } = useContext( UIContext );

    return (
        <LayoutPage title={` Country | ${country.name} `}>
            <Container>
                <Button isDark={ isDark } text="Back" icon/>
                <PageCountry 
                >
                    <Box flexAuto>
                        <ContainerImage 
                            src={ country.img }
                            height={ "400px" }
                        />
                    </Box>
                    <Box flexAuto>
                        <Title size={ 28 }>{ country.name }</Title>
                        <CountryInfo >
                            <Box flexAuto>
                                {
                                    country.nativeName &&
                                    <Text size={ 16 } weight={ 600 } color={ isDark ? "#fff" : "hsl(209, 23%, 22%)" }>
                                        Native Name: <span className='greyText'>
                                            { returnNativeName( country.nativeName ) }
                                        </span>
                                    </Text>
                                }
                                <Text size={ 16 } margin='15px 0 0 0' weight={ 600 } color={ isDark ? "#fff" : "hsl(209, 23%, 22%)" }>
                                    Populaton: <span className='greyText'>{ country.population }</span>
                                </Text>
                                <Text size={ 16 } margin='15px 0 0 0' weight={ 600 } color={ isDark ? "#fff" : "hsl(209, 23%, 22%)" }>
                                    Region: <span className='greyText'>{ country.region }</span>
                                </Text>
                                {
                                    country.subregion &&
                                    <Text size={ 16 } margin='15px 0 0 0' weight={ 600 } color={ isDark ? "#fff" : "hsl(209, 23%, 22%)" }>
                                        Sub Region: <span className='greyText'>{ country.subregion }</span>
                                    </Text>
                                }
                                {
                                    country.capital &&
                                    <Text size={ 16 } margin='15px 0 0 0' weight={ 600 } color={ isDark ? "#fff" : "hsl(209, 23%, 22%)" }>
                                        Capital: <span className='greyText'>{ country.capital }</span>
                                    </Text>
                                }
                            </Box>
                            <Box flexAuto>
                                <Text size={ 16 } margin='15px 0 0 0' weight={ 600 } color={ isDark ? "#fff" : "hsl(209, 23%, 22%)" }>
                                    Top Level Domain: <span className='greyText'>{ country.tld }</span>
                                </Text>
                                {
                                    country.curriences &&
                                    <Text size={ 16 } margin='15px 0 0 0' weight={ 600 } color={ isDark ? "#fff" : "hsl(209, 23%, 22%)" }>
                                        Currencies: <span className='greyText'>{ country.curriences[Object.keys(country.curriences)[0]].name }</span>
                                    </Text>
                                }
                                {
                                    country.languages &&
                                    <Text size={ 16 } margin='15px 0 0 0' weight={ 600 } color={ isDark ? "#fff" : "hsl(209, 23%, 22%)" }>
                                        Languages: <span className='greyText'>{ returnLanguages( country.languages ) }</span>
                                    </Text>
                                }
                            </Box>
                        </CountryInfo>
                        <Box>
                            {
                                country.borders &&
                                <Text size={ 16 } margin='55px 0 0 0' weight={ 600 } color={ isDark ? "#fff" : "hsl(209, 23%, 22%)" }>
                                    Borders: 
                                    <span className='responsive'>
                                        {
                                            country.borders.map((c, idx) => (
                                                <Button 
                                                    isDark={ isDark } 
                                                    key={ idx } 
                                                    text={ c }    
                                                />
                                            ))
                                        }
                                    </span>
                                </Text>
                            }
                        </Box>
                    </Box>
                </PageCountry>
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
    
    let countryBorders = [""];

    if ( results[0].borders ){
        const borders = await fetch(`https://restcountries.com/v3.1/alpha?codes=${ returnBorders( results[0].borders! ) }`)
        const bordersResult: ICountry[] = await borders.json();
    
        countryBorders = bordersResult.map( b => b.name.common );
    }

    const country = results.map((c): ICountryMedium => ({
        name: c.name.common,
        img: c.flags.svg,
        population: c.population.toLocaleString("es-AR"),
        region: c.region,
        capital: c.capital || null,
        nativeName: c.name.nativeName || null,
        tld: c.tld,
        curriences: c.currencies || null,
        languages: c.languages || null,
        subregion: c.subregion || null,
        borders: countryBorders
    }))
    
    console.log(country[0].languages)
    return {
        props: {
            country: JSON.parse( JSON.stringify(country[0]) )
        }
    }
}

export default CountryPage