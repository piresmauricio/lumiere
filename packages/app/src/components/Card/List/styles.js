import styled from 'styled-components';

export const Container = styled.li`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 0;
    max-width: 100px;

    strong {
      display: flex;
      color: ${props => (props.status ? '#eee' : '#999')};
      font-size: 20px;
      font-weight: normal;
    }

    > span {
      margin: 3px 5px 3px 0;
      padding: 0;
      font-size: 12px;
      color: ${props => (props.status ? '#eee' : '#999')};
    }

    div {
      display: flex;
      flex-direction: row;
    }
  }

  span {
    display: flex;
    flex: 1;
    align-items: center;
    font-size: 16px;
    padding: 0 10px;
    color: ${props => (props.status ? '#eee' : '#999')};
  }

  img {
    display: ${props => !props.status && 'none'};
    align-self: center;
    width: 43px;
    height: 43px;
    border-radius: 50%;
  }
`;
