import { MutatingDots } from 'react-loader-spinner';
import { InfinitySpin } from 'react-loader-spinner';

import SpinnerBox from './Spinner.styled';
import theme from 'theme';

const Spinner = () => {
  return (
    <SpinnerBox>
      <InfinitySpin width="200" color={theme.colors.accent} />
      {/* <MutatingDots
        height="100"
        width="100"
        color={theme.colors.accent}
        secondaryColor={theme.colors.muted}
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        visible={true}
      /> */}
    </SpinnerBox>
  );
};

export default Spinner;
