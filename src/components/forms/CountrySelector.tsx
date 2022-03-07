import { Country } from 'country-state-city';
import { SelectWrapper } from '.';

interface CountrySelectorProps {
  selectedCountryCode?: string;
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}

const CountrySelector = ({
  selectedCountryCode,
  onChange,
  ...rest
}: CountrySelectorProps) => {
  const countries = Country.getAllCountries();

  return (
    <SelectWrapper
      onChange={onChange}
      name="country"
      value={selectedCountryCode}
      {...rest}
    >
      {countries.map((country) => {
        return (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        );
      })}
    </SelectWrapper>
  );
};

export default CountrySelector;
