import styled from 'styled-components';

import * as constants from '../../constants';

export const Container = styled.div`
  width: 100%;
  background: #207868;
  padding: 0 30px;

  @media (max-width: ${constants.mobileL}) {
    padding-left: 15px;
  }

  @media (max-width: ${constants.mobileS}) {
    padding-left: 7px;
  }
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      max-width: 100px;
      max-height: 100px;
      border-radius: 5px;
      margin-right: 20px;
      padding-right: 20px;
    }

    a {
      font-weight: bold;
      color: ${constants.ColorPallet[3]};
    }

    button {
      background: none;
      border: none;
      color: #fff;

      margin-right: 30px;
      margin-top: 5px;
    }
  }

  span {
    color: #f3f7f0;
    font-weight: bold;
    font-size: 16px;

    @media (max-width: ${constants.mobileL}) {
      display: none;
    }
  }

  aside {
    display: flex;
    align-items: center;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-content: center;

      svg {
        margin: 7px;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid ${constants.ColorPallet[3]};
  color: ${constants.ColorPallet[3]};

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      margin-top: 6px;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 11px;
      color: ${constants.ColorPallet[3]};
    }

    @media (max-width: ${constants.tablet}) {
      strong,
      a {
        display: none;
      }
    }
  }

  img {
    width: 43px;
    height: 43px;
    border-radius: 50%;
  }
`;
