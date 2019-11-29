import React from 'react';

import { Container } from './styles';
import { appointmentStatus } from '~/constants';

export default function Dashboard({ time, ...props }) {
  return (
    <Container {...props}>
      <div>
        <strong>{time.time}</strong>
        <span>{time.appointment && time.appointment.user.name}</span>
        <span>
          {time.appointment
            ? appointmentStatus[time.appointment.status]
            : 'Disponível'}
        </span>
      </div>

      <img
        src={
          (time.appointment && time.appointment.user.avatar.url) ||
          'https://api.adorable.io/avatars/50/abott@adorable.png'
        }
        alt="Avatar"
      />
    </Container>
  );
}
