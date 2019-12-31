import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/nova-logo-pxm.png';
import Notifications from '~/components/Notifications';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Logo" />
          </Link>
          <Link to="/dashboard">AGENDA</Link>
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
