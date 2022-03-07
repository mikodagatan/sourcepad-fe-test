import tw from 'tailwind-styled-components';
import { inputDefaultClasses } from '.';

interface SelectProps {
  className?: string;
}

const SelectWrapper = tw.select<SelectProps>`
  ${(_p) => inputDefaultClasses}

  w-full 
  bg-white 
  mt-3 
  mb-1
  
  ${(p) => (p.className ? p.className : '')}

`;

export default SelectWrapper;
