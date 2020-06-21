import styled from 'styled-components';

import * as constants from '../../constants';

export const Container = styled.li`
  background: ${props => props.background || '#fff'};
  color: ${props => props.color || '#000'};
  padding: 20px;
  border-radius: 4px;
  border: ${props => props.border || 'none'};
  opacity: ${props => props.opacity || '1'};
  cursor: pointer;

  strong {
    display: flex;
    color: ${props => (props.status ? '#EEE' : constants.ColorPallet[7])};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: flex;
    align-items: center;
    margin-top: 3px;
    color: ${props => (props.status ? '#EEE' : constants.ColorPallet[7])};
  }

  :hover {
    opacity: 1;
  }
`;
