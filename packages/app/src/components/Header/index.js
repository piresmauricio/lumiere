import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo-ema-soft3.png';
import Notifications from '~/components/Notifications';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Ema" />
          </Link>
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">{profile.email}</Link>
            </div>
            <Link to="/profile">
              <img
                src={
                  (profile.avatar && profile.avatar.url) ||
                  'https://api.adorable.io/avatars/50/abott@adorable.png'
                }
                alt="Avatar"
              />
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
