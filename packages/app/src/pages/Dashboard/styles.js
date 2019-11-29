import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

import * as device from '~/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding-left: 13px;
  max-height: calc(100% - 100px);

  header {
    display: flex;
    align-self: center;
    align-items: center;
    text-align: center;
    margin-top: 15px;

    button {
      all: unset; /* Zera o elemento */
      max-height: 36px;
      cursor: pointer;
    }

    strong {
      font-size: 16px;
      min-width: 120px;
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
  }

  div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;

    > div {
      padding-bottom: 0;
    }
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
  margin-right: 10px;
  cursor: pointer;
  opacity: ${props => (props.view === 'dashboard' ? 1 : 0.3)};
`;

export const Scroll = styled(PerfectScrollbar)`
  border-radius: 4px;
`;
