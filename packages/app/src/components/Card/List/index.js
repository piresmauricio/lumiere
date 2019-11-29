import React from 'react';

import { Container } from './styles';
import { status } from '~/constants';

export default function List({ time, ...props }) {
  return (
    <Container {...props}>
      <img
        src="https://api.adorable.io/avatars/50/abott@adorable.png"
        alt="Avatar"
      />

      <span>{time.appointment && time.appointment.user.name}</span>
      <div>
        <strong>{time.time}</strong>
        <span>
          {time.appointment ? status[time.appointment.status] : 'Disponível'}
        </span>
      </div>
    </Container>
  );
}
