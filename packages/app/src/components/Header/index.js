import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo-ema-soft3.png';
import Notifications from '~/components/Notifications';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Ema" />
          <Link to="/dashboard">WORKSPACE</Link>
        </nav>
        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Mauricio Cardoso</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
