import tw from 'tailwind-styled-components';
interface FormContainerProps {
  className?: string;
  children: React.ReactNode;
}

const FormContainer = tw.nav<FormContainerProps>`
  h-fit 
  w-fit 
  sm:max-w-[400px] 
  max-w-full

  bg-white 
  shadow-lg 
  rounded-md 
  
  ${(p) => (p.className ? p.className : '')}
`;

export default FormContainer;
