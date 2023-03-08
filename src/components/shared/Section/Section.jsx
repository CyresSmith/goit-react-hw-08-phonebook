import Box from 'components/shared/Box';
import Title from 'components/shared/Title/Title.styled';
import { PropTypes } from 'prop-types';
import theme from 'theme';

const Section = ({ title, children, variant = 'container' }) => {
  return (
    <Box variant="section" as="section" backgroundColor="background">
      <Box variant={variant}>
        {title && <Title>{title}</Title>}
        {children}
      </Box>
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Section;
