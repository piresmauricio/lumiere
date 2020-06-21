import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, Planodefundo } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <div>
        <Content>{children}</Content>
      </div>
      
      <div>
        <Planodefundo />
      </div>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
