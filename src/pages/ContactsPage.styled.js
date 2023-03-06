import styled from 'styled-components';
import theme from 'theme';

export const GridBox = styled.div`
  width: 100%;
  display: grid;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 16px;
  margin-bottom: ${theme.space[5]};
`;
