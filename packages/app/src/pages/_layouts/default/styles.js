import styled from 'styled-components';

import * as constants from '../../../constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  background: ${constants.ColorPallet[5]};
  color: ${constants.ColorPallet[2]};

  overflow: auto;
`;
