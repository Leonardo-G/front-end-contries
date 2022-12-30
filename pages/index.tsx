import { useEffect, useState } from 'react';
import { GetStaticProps, NextPage } from 'next'

import { CountriesContainer } from '../components/countries/CountriesContainer';
import { LayoutPage } from '../components/layout/LayoutPage';
import { ContainerInputs } from '../components/search/ContainerInputs';

import { Container } from '../styled/globals';
import { ICountry, ICountryShort } from '../interfaces/country';

interface Props {
  countries: ICountryShort[];
}
const Home: NextPage<Props> = ({ countries }) => {

  const [countriesShort, setCountries] = useState( countries.filter( (c, idx) => idx >= 0 && idx <= 19 ))

  return (
      <LayoutPage title='Countries'>
        <Container>
          <ContainerInputs />
          <CountriesContainer countries={ countriesShort }/>
        </Container>
      </LayoutPage>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await fetch("https://restcountries.com/v3.1/all");
  const results: ICountry[] = await data.json();

  const countries = results.map( c => ({
    name: c.name.common,
    img: c.flags.png,
    population: c.population.toLocaleString("es-AR"),
    region: c.region,
    capital: c.capital
  }))

  countries.sort(( a, b ) => {
    const countryA = a.name.toLowerCase();
    const countryB = b.name.toLowerCase();

    if ( countryA < countryB ) return -1;
    if ( countryA > countryB ) return 1;

    return 0;
  })

  return {
    props: {
      countries: JSON.parse( JSON.stringify(countries) )
    }
  }
}

export default Home;
