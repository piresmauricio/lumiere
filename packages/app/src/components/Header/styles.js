import styled from 'styled-components';
import * as device from '~/styles/breakpoints';
import { strongColorHeader } from '~/constants';

export const Container = styled.div`
  width: 100%;
  background: #fcfff9;
  padding: 0 30px;

  @media (max-width: ${device.mobileL}) {
    padding-left: 15px;
  }

  @media (max-width: ${device.mobileS}) {
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

      max-width: 145px;
      max-height: 145px;
      border-radius: 5px;
      margin-right: 20px;
      padding-right: 20px;
    }

    a {
      font-weight: bold;
      color: ${strongColorHeader};
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      margin-top: 6px;
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 11px;
      color: #999;
    }

    @media (max-width: ${device.tablet}) {
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
    border: 1px solid #d6d6d6;
  }
`;
