import styled from 'styled-components';

import * as device from '~/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  max-height: 40px;
  position: fixed;
  bottom: 0;

  button {
    display: flex;
    background: none;
    border: none;
    padding: 10px 5px;

    @media (max-width: ${device.tablet}) {
      display: none;
    }
  }
`;
