import tw from 'tailwind-styled-components';

export const Navbar = tw.nav`
  w-full 
  h-14 
  py-2

  flex 
  justify-between 
  items-center

  bg-gray-100 
  shadow
`;

export const NavbarLeft = tw.div`
  pl-4 
`;

export const NavbarRight = tw.div`
  pr-4
`;
