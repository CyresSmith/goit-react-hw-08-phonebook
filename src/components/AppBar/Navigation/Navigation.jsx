import { FaHome, FaUsers } from 'react-icons/fa';
import { Nav, Link } from './Navigation.styled';
import Logo from './Logo';

import { useSelector } from 'react-redux';
import { getAuth } from 'redux/selectors';

const Navigation = () => {
  const { token } = useSelector(getAuth);

  return (
    <Nav>
      <ul>
        <li>
          <Logo />
        </li>
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
        {token !== '' && (
          <li>
            <Link to="/contacts">
              <FaUsers />
              Contacts
            </Link>
          </li>
        )}
      </ul>
    </Nav>
  );
};

export default Navigation;
