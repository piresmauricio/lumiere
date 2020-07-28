import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// eslint-disable-next-line import/named
import { BtnGoogle, BtnFacebook } from '../_layouts/auth/styles';

import { signInRequest } from '~/store/modules/auth/actions';

// Validações Yup
const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BtnGoogle>Google</BtnGoogle>
        <BtnFacebook>Facebook</BtnFacebook>

        <hr />

        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <Link to="/register">Esqueci minha senha</Link>
        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <div>
          <Link to="/register">
            Não tem uma conta? <b>Registre-se</b>
          </Link>
        </div>
      </Form>
    </>
  );
}
