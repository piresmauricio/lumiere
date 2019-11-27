import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { Container, Scroll } from './styles';
import Avatar from './AvatarInput';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Scroll>
      <Container>
        <Form initialData={profile} onSubmit={handleSubmit}>
          <Avatar name="avatar_id" />
          <Input name="name" placeholder="Nome completo" />
          <Input
            name="email"
            type="email"
            placeholder="Seu endereço de email"
          />
          <hr />
          <Input
            type="password"
            name="oldPassword"
            placeholder="Sua senha atual"
          />
          <Input type="password" name="password" placeholder="Nova senha" />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirmação de senha"
          />
          <button type="submit">Atualizar perfil</button>
        </Form>

        <button type="submit" onClick={handleSignOut}>
          Sair da aplicação
        </button>
      </Container>
    </Scroll>
  );
}
