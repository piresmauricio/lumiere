import styled from 'styled-components';

import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  display: flex;
  align-self: center;

  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 10px;

  max-height: calc(100% - 130px);

  header {
    display: flex;
    align-self: center;
    align-items: center;
    text-align: center;

    margin-top: 15px;
    button {
      all: unset; /* Zera o elemento */
      max-height: 36px;
    }

    strong {
      font-size: 16px;
      /* height: 100%; */
    }
  }

  ul {
    width: 100%;
    display: grid;
    grid-template-columns: ${props =>
      props.view === 'dashboard'
        ? 'repeat( auto-fit, minmax(150px, 1fr))'
        : 'repeat(1, 1fr)'};
    grid-gap: 15px;
    padding-right: 15px;
    height: 100%;
    overflow: auto;
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

export const Scroll = styled(PerfectScrollbar)`
  border-radius: 4px;
`;
