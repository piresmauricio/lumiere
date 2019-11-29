import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: left;

    strong {
      display: flex;
      color: ${props => (props.status ? '#eee' : '#999')};
      font-size: 20px;
      font-weight: normal;
    }

    span {
      display: flex;
      margin-top: 3px;
      font-size: 12px;
      color: ${props => (props.status ? '#eee' : '#999')};
    }
  }

  img {
    display: ${props => !props.status && 'none'};
    align-self: center;
    width: 43px;
    height: 43px;
    border-radius: 50%;
  }
`;
