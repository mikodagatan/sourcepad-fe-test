import tw from 'tailwind-styled-components';

interface ContainerLayoutProps {
  className?: string;
  children: React.ReactNode;
}

const ContainerLayout = tw.nav<ContainerLayoutProps>`
  flex 
  items-center 
  justify-center 
  
  w-full 
  md:w-screen 
  h-screen 
  
  p-4

  ${(p) => (p.className ? p.className : '')}
`;

export default ContainerLayout;
