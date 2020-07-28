/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as iconGi from 'react-icons/gi';
import { MdSettings, MdTune } from 'react-icons/md';

import { Container, Content, Profile } from './styles';
import Notifications from '../Notifications';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const [open, setOpen] = useState(false);
  const now = new Date();
  let periodoDia = '###';

  // Período do dia
  if (now.getHours() <= 12) {
    periodoDia = 'Bom dia, ';
  } else if (now.getHours() > 12 && now.getHours() <= 18) {
    periodoDia = 'Boa tarde, ';
  } else {
    periodoDia = 'Boa noite, ';
  }

  return (
    <Container>
      <Content>
        <nav>
          <button type="button" onClick={() => setOpen(!open)}>
            <iconGi.GiHamburgerMenu size={21} />
          </button>

          <span>Meus Horários</span>
        </nav>

        <span>
          {periodoDia} {profile.name}!
        </span>

        <aside>
          <div>
            <MdTune size={24} color="#F3F7F0" />
            <MdSettings size={24} color="#F3F7F0" />
            <Notifications />
          </div>

          <Profile>
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
