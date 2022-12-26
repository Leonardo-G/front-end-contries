import { useEffect, useState } from 'react';

import { CountriesContainer } from '../components/countries/CountriesContainer';
import { LayoutPage } from '../components/layout/LayoutPage';
import { ContainerInputs } from '../components/search/ContainerInputs';

import { Container } from '../styled/globals';

export default function Home() {

  const [countries, setCountries] = useState([])

  const fetchApi = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all?sort=asc");
    const results = await response.json();
    console.log(results)
    setCountries( results );
  }

  useEffect(() => {
    fetchApi()
      .catch( err => console.log(err) )
  }, [])

  return (
      <LayoutPage title='Countries'>
        <Container>
          <ContainerInputs />
          <CountriesContainer countries={ countries }/>
        </Container>
      </LayoutPage>
  )
}
