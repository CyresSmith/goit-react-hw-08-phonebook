import styled from 'styled-components';
import theme from 'theme';
import { Form } from 'formik';

export const RegisterForm = styled(Form)`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: ${theme.space[5]} ${theme.space[4]};
  background-color: ${theme.colors.secondary};
  border-radius: ${theme.radii.high};
`;
