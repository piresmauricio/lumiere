import styled from 'styled-components';

export const Container = styled.li`
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
`;
