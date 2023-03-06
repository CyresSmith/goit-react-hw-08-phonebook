import styled from 'styled-components';
import theme from 'theme';
import { Form, Field } from 'formik';

export const PhonebookForm = styled(Form)`
  display: inline-flexbox;
  padding: ${theme.space[5]} ${theme.space[4]};
  background-color: ${theme.colors.secondary};
  border-radius: ${theme.radii.high};
  box-shadow: ${theme.shadow.medium};
  grid-area: 1 / 2 / 2 / 4;
`;

export const Label = styled.label`
  position: absolute;
  bottom: calc(34px + ${theme.space[2]});
  left: ${theme.space[4]};
  font-size: ${theme.fontSizes.s};
  margin-bottom: ${theme.space[1]};
  color: ${theme.colors.accent};
`;

export const Input = styled(Field)`
  font-size: ${theme.fontSizes.m};
  margin-left: ${theme.space[3]};
  padding: ${theme.space[3]};
  border: ${theme.borders.none};
  border-radius: ${theme.radii.normal};
  background-color: ${theme.colors.primary};
  width: 220px;

  ::placeholder {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.secondary};
  }
`;

export const Error = styled.p`
  display: inline;
  position: absolute;
  top: calc(${theme.space[3]} + 34px);
  right: 0;
  font-size: ${theme.fontSizes.m};
  color: red;
`;
