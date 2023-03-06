import styled from 'styled-components';
import theme from 'theme';

export const FilterBox = styled.div`
  padding: ${theme.space[5]} ${theme.space[4]};
  background-color: ${theme.colors.secondary};
  border-radius: ${theme.radii.high};
  box-shadow: ${theme.shadow.medium};
  grid-area: 1 / 1 / 2 / 2;
`;

export const Label = styled.label`
  position: absolute;
  bottom: calc(34px + ${theme.space[2]});
  left: 5px;
  font-size: ${theme.fontSizes.s};
  margin-bottom: ${theme.space[1]};
  color: ${theme.colors.background};
`;

export const Input = styled.input`
  width: 290px;
  font-size: ${theme.fontSizes.m};
  margin-left: ${theme.space[3]};
  padding: ${theme.space[3]};
  border: ${theme.borders.none};
  border-radius: ${theme.radii.normal};
  background-color: ${theme.colors.primary};

  ::placeholder {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.secondary};
  }
`;
