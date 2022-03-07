import { ICity } from 'country-state-city/dist/lib/interface';
import { SelectWrapper } from '.';

interface CitySelectorProps {
  cities?: ICity[];
  selectedCity?: string;
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}

const CitySelector = ({
  cities,
  selectedCity,
  onChange,
  ...rest
}: CitySelectorProps) => {
  return (
    <SelectWrapper
      name="city"
      onChange={onChange}
      value={selectedCity}
      {...rest}
    >
      {cities &&
        cities.map((city, index) => {
          return (
            <option key={`${city.name}-${index}`} value={city.name}>
              {city.name}
            </option>
          );
        })}
    </SelectWrapper>
  );
};

export default CitySelector;
