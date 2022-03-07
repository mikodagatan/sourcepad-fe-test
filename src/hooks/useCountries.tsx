import * as React from 'react';
import { Country, City } from 'country-state-city';
import { ICity } from 'country-state-city/dist/lib/interface';
import {
  CountrySelector as CountrySelectorBase,
  CitySelector as CitySelectorBase,
} from 'components';

interface useCountriesProps {
  setValue: any;
}

const useCountries = ({ setValue }: useCountriesProps) => {
  const [selectedCountry, setSelectedCountry] =
    React.useState<string>('Philippines');
  const [selectedCountryCode, setSelectedCountryCode] =
    React.useState<string>('PH');
  const [selectedCity, setSelectedCity] = React.useState<string>('Manila');
  const [cities, setCities] = React.useState<ICity[] | undefined>(
    City.getCitiesOfCountry('PH')
  );

  const onChangeCountry = (e: React.FormEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value) {
      const countryName = Country.getCountryByCode(e.currentTarget.value)?.name;
      if (countryName) {
        setSelectedCountry(countryName);
        setSelectedCountryCode(e.currentTarget.value);
      }
      const cities = City.getCitiesOfCountry(e.currentTarget.value);
      if (cities) setCities(cities);
    }
  };

  const onChangeCity = (e: React.FormEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value) setSelectedCity(e.currentTarget.value);
  };

  const CountrySelector = ({ ...rest }) => {
    return (
      <CountrySelectorBase
        selectedCountryCode={selectedCountryCode}
        onChange={onChangeCountry}
        {...rest}
      />
    );
  };

  const CitySelector = () => {
    return (
      <CitySelectorBase
        cities={cities}
        onChange={onChangeCity}
        selectedCity={selectedCity}
      />
    );
  };

  return { CountrySelector, CitySelector, selectedCountry, selectedCity };
};

export default useCountries;
