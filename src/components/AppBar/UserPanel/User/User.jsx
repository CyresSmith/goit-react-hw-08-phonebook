import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { useSelector } from 'react-redux';

import { RiLogoutBoxFill } from 'react-icons/ri';

import { UserName } from './User.styled';
import Box from 'components/shared/Box';
import Button from 'components/shared/Button';

import { useUserLogOutMutation } from 'redux/userAPI';
import { setAuth } from 'redux/authSlice';
import { authInitialState } from 'redux/authSlice';
import { clearAuthHeader } from 'redux/axiosBaseQuery';
import { contactsApi } from 'redux/contactsAPI';

import { getAuth } from 'redux/selectors';

const User = () => {
  const dispatch = useDispatch();

  const [userLogOut, { isError, isLoading, isSuccess, error }] =
    useUserLogOutMutation();

  const { user } = useSelector(getAuth);

  if (isSuccess) {
    dispatch(setAuth(authInitialState));
    dispatch(contactsApi.util.resetApiState());
    clearAuthHeader();
    Notify.info(`Successfully log out`);
  }

  if (isError) {
    switch (error.status) {
      case 401:
        Notify.failure(`What a shame! User log out error.`);
        break;

      case 500:
        Notify.failure(`What a shame! Some problems with server.`);
        break;

      default:
        Notify.failure(`What a shame! Some problems happend.`);
        break;
    }
  }

  return (
    <Box display="flex" alignItems="center">
      <UserName>{user?.name}</UserName>

      <Button
        isLoading={isLoading}
        icon={RiLogoutBoxFill}
        disabled={isLoading ? true : false}
        children="Log out"
        onClick={userLogOut}
        iconSize={20}
      />
    </Box>
  );
};

export default User;
