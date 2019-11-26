import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 35px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      background: none;
      border: 0;
      display: flex;
      align-items: center;
    }

    strong {
      margin: 0 15px;
      font-size: 16px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin-top: 10px;
  }

  div {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Time = styled.li`
  background: #fff;
  color: #000;
  padding: 20px;
  border-radius: 4px;
  opacity: ${props => (props.past || props.available ? 0.6 : 1)};

  strong {
    display: flex;
    color: ${props => (props.available ? '#999' : '#793586')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: flex;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;

export const ModeListView = styled.button`
  background: none;
  border: none;
  padding: 0 3px;
  cursor: pointer;
  opacity: ${props => (props.view === 'list' ? 1 : 0.3)};
`;

export const ModeDashView = styled.button`
  background: none;
  border: none;
  padding: 0 3px;
  cursor: pointer;
  opacity: ${props => (props.view === 'dashboard' ? 1 : 0.3)};
`;
