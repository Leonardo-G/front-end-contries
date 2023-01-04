import React, { useContext } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { LayoutPage } from '../../components/layout/LayoutPage'
import { ICountry, ICountryShort } from '../../interfaces/country'
import { Container } from '../../styled/globals';
import { Button } from '../../components/UI/Button';
import { UIContext } from '../../context/UI/UIContext';
import { Box } from '../../styled/flexbox';
import { ContainerImage } from '../../components/image/ContainerImage';
import { Text, Title } from '../../styled/text';

interface Props {
    country: ICountryShort;
}

const CountryPage: NextPage<Props> = ({ country }) => {
    
    const { isDark } = useContext( UIContext );

    return (
        <LayoutPage title={` Country | ${country.name} `}>
            <Container>
                <Button isDark={ isDark }/>
                <Box 
                    flex
                >
                    <ContainerImage 
                        src={ country.img }
                        height={ "400px" }
                    />
                    <Box minWidth='50%'>
                        <Title size={ 28 }>{ country.name }</Title>
                        <Box>
                            <Box>
                                <Text margin='15px 0 0 0' weight={ 600 } color={ isDark ? "#fff" : "#000" }>
                                    Native Name: <span className='greyText'>{ country.population }</span>
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

    const country = results.map( c => ({
        name: c.name.common,
        img: c.flags.png,
        population: c.population.toLocaleString("es-AR"),
        region: c.region,
        capital: c.capital
      }))

    return {
        props: {
            country: JSON.parse( JSON.stringify(country[0]) )
        }
    }
}

export default CountryPage