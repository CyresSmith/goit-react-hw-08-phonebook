import Box from 'components/shared/Box';
import { useSelector } from 'react-redux';

import UserNavigation from './UserNavigation';

import User from './User/User';

import { getAuth } from 'redux/selectors';

const UserPanel = () => {
  const { token } = useSelector(getAuth);

  return (
    <Box ml="auto" display="flex" alignItems="center">
      {token === '' ? <UserNavigation /> : <User />}
    </Box>
  );
};

export default UserPanel;
