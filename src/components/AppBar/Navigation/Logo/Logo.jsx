import { LogoLink, LogoBox, LogoText } from './Logo.styled';
import { GiRotaryPhone } from 'react-icons/gi';

const Logo = () => {
  return (
    <LogoLink to="/">
      <LogoBox>
        <GiRotaryPhone />
      </LogoBox>
    </LogoLink>
  );
};

export default Logo;
