import React from 'react';

import { Container } from './styles';
import { status } from '~/constants';

export default function Dashboard({ time, ...props }) {
  return (
    <Container {...props}>
      <strong>{time.time}</strong>
      <span>{time.appointment && time.appointment.user.name}</span>
      <span>
        {time.appointment ? status[time.appointment.status] : 'Disponível'}
      </span>
    </Container>
  );
}
