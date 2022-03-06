import LogoImg from 'assets/images/cyanide-logo.png';

interface LogoParams {
  size?: string;
}

const Logo = ({ size = 'md' }: LogoParams) => {
  const sizeClass = {
    sm: 'h-10 w-10',
    md: 'h-24 w-24',
  };
  return <img src={LogoImg} alt="Logo" className={`my-2 ${sizeClass[size]}`} />;
};

export default Logo;
