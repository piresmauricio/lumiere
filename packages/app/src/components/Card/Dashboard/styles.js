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
      color: ${props => (props.status ? '#333' : '#999')};
      font-size: 20px;
      font-weight: normal;
    }

    span {
      display: flex;
      align-items: center;
      margin: 3px 5px 3px 0;
      font-size: 12px;
      color: ${props => (props.status ? '#333' : '#999')};
    }

    div {
      display: flex;
      flex-direction: row;
    }
  }

  img {
    display: ${props => !props.status && 'none'};
    align-self: center;
    width: 43px;
    height: 43px;
    border-radius: 50%;
    border: 1px solid #999;
  }
`;
