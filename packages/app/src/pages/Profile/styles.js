import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { darken } from 'polished';

import * as constants from '~/constants';

export const Container = styled.div`
  margin: 10px auto;
  width: 100%;
  max-width: 600px;
  padding: 15px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 0px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: ${constants.ColorPallet[7]};
      margin: 0 0 5px;

      &::placeholder {
        color: rgba(${constants.ColorPallet[0]}, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 15px 10px;
      font-size: 12px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: ${constants.ColorPallet[0]};
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;

      &:hover {
        background: ${darken(0.03, constants.ColorPallet[0])};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 14px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: ${constants.ColorPallet[1]};
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;

    &:hover {
      background: ${darken(0.03, constants.ColorPallet[1])};
    }
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  border-radius: 4px;
`;
