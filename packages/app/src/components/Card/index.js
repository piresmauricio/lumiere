import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Card({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
};
