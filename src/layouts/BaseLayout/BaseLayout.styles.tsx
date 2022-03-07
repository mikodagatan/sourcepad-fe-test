import tw from 'tailwind-styled-components';

export const Navbar = tw.nav`
  w-full
  h-fit 
  md:h-[64px] 
  py-1

  flex 
  md:flex-row
  justify-between 
  items-center
  space-y-2
  md:space-y-0

  bg-gray-100 
  shadow
  
  text-sm
  md:text-base
`;

export const NavbarLeft = tw.div`
  pl-4 
`;

export const NavbarRight = tw.div`
  pr-4
`;
