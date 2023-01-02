import { useContext, useEffect, useState } from 'react';
import { GetStaticProps, NextPage } from 'next'

import { CountriesContainer } from '../components/countries/CountriesContainer';
import { LayoutPage } from '../components/layout/LayoutPage';
import { ContainerInputs } from '../components/search/ContainerInputs';

import { Container } from '../styled/globals';
import { ICountry, ICountryShort } from '../interfaces/country';
import { Barra } from '../components/UI/Barra';
import { UIContext } from '../context/UI/UIContext';

interface Props {
  countries: ICountryShort[];
}
const Home: NextPage<Props> = ({ countries }) => {

  const { search } = useContext( UIContext );
  const [page, setPage] = useState(1);
  const [countriesShort, setCountries] = useState( countries.filter( (c, idx) => idx >= 0 && idx <= 19 * page ))

  const handleClickMore = () => {
    setPage( page + 1 );
  }

  useEffect(() => {
    if ( search !== "" ){
      const searchCountries = countries.filter( c => {
        const searchCountry = c.name.toLowerCase().search(search.toLocaleLowerCase().toString());
        
        return searchCountry >= 0;
      })

      setCountries( searchCountries );
      return;
    }

    setCountries( countries.filter( (c, idx) => idx >= 0 && idx <= 19 * page ) )
  }, [ page ])

  useEffect(() => {

    if ( search !== "" ){
        const searchCountries = countries.filter( c => {
        const searchCountry = c.name.toLowerCase().search(search.toLocaleLowerCase().toString());
        
        return searchCountry >= 0;
      })

      setCountries( searchCountries )
    }

  }, [ search ])

  return (
      <LayoutPage title='Countries'>
        <Container>
          <ContainerInputs />
          <CountriesContainer countries={ countriesShort }/>
          {
            countriesShort.length >= 18 &&
            <Barra clickEvent={ handleClickMore }/>
          }
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
