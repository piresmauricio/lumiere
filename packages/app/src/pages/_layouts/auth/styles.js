import styled from 'styled-components';
import { darken } from 'polished';
import background from '../../../assets/background.png';

import * as constants from '~/constants';

export const Wrapper = styled.div`
  height: 100%;
  background: url(${background});

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnGoogle = styled.button`
  margin: 5px 0 0;
  height: 44px;
  width: 100%;
  background: #d85c59 !important;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    background: ${darken(0.03, '#d85c59')} !important;
  }
`;

export const BtnFacebook = styled.button`
  margin: 5px 0 0;
  height: 44px;
  width: 100%;
  background: #4267b2 !important;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    background: ${darken(0.03, '#4267b2')} !important;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: ${constants.ColorPallet[2]};
      margin: 0 0 5px;

      &::placeholder {
        color: rgba(${constants.ColorPallet[2]}, 0.7);
      }
    }

    span {
      color: #d85c59;
      align-self: flex-start;
      margin: 0 0 15px 10px;
      font-size: 12px;
    }

    div {
      padding-top: 20px;

      a {
        color: ${constants.ColorPallet[2]};
        margin-top: 15px;
        font-size: 14px;
        opacity: 0.8;
        font-weight: normal;

        &:hover {
          opacity: 1;
        }
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #207868;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;

      &:hover {
        background: ${darken(-0.03, '#207868')};
      }
    }

    a {
      color: #207868;
      margin-top: 15px;
      font-size: 12px;
      opacity: 0.8;
      text-align: left;
      font-weight: bold;

      &:hover {
        opacity: 1;
      }
    }

    hr {
      margin-top: 20px;
      margin-bottom: 20px;
      border: 0;
      height: 2px;
      background-image: linear-gradient(
        to right,
        transparent,
        #d1d3d2,
        transparent
      );
    }
  }

  > img {
    max-width: 200px;
  }
`;
