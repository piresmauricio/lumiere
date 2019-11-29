import styled from 'styled-components';

export const Container = styled.li`
  background: ${props => props.background || '#fff'};
  color: #000;
  padding: 20px;
  border-radius: 4px;
  border: ${props => props.border || 'none'};
  opacity: ${props => props.opacity || '1'};
  cursor: pointer;

  strong {
    display: flex;
    color: ${props => (props.status ? '#eee' : '#999')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: flex;
    margin-top: 3px;
    color: ${props => (props.status ? '#eee' : '#999')};
  }

  :hover {
    opacity: 0.7;
  }
`;
