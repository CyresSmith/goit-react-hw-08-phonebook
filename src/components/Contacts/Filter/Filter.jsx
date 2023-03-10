import { ImFilter } from 'react-icons/im';
import { useDispatch } from 'react-redux';

import { FilterBox, Label, Input } from './Filter.styled';
import { setFilterValue } from 'redux/filterSlice';
import Box from 'components/shared/Box';
import theme from 'theme';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const value = e.currentTarget.value.toLowerCase().trim();
    dispatch(setFilterValue(value));
  };

  return (
    <FilterBox>
      <Box display="flex" flexDirection="column" alignItems="flrx-start">
        <Box display="flex" alignItems="center">
          <ImFilter size={34} color={theme.colors.accent} />
          <Box position="relative">
            <Input
              type="text"
              id="filter"
              name="filter"
              placeholder="Contact name"
              onChange={handleFilterChange}
            />
            <Label htmlFor="filter">Contacts filter</Label>
          </Box>
        </Box>
      </Box>
    </FilterBox>
  );
};

export default Filter;
