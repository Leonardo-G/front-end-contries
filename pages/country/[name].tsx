import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { LayoutPage } from '../../components/layout/LayoutPage'
import { ICountry, ICountryShort } from '../../interfaces/country'
import { Container } from '../../styled/globals';

interface Props {
    country: ICountryShort;
}

const CountryPage: NextPage<Props> = ({ country }) => {
    console.log(country)
    return (
        <LayoutPage title={` Country | ${country.name} `}>
            <Container>
                
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