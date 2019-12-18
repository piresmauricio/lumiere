import styled from 'styled-components';
import { primaryColor, secondaryColor, strongColorBody } from '~/constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(-90deg, ${primaryColor}, ${secondaryColor});
  overflow: auto;
  color: ${strongColorBody};
`;
