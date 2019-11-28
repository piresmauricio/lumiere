import React from 'react';

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGit,
  FaJs,
  FaYarn,
} from 'react-icons/fa';
import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <button type="button">
        <FaNodeJs color="#793586" size={20} />
      </button>

      <button type="button">
        <FaReact color="#793586" size={20} />
      </button>

      <button type="button">
        <FaJs color="#793586" size={20} />
      </button>

      <button type="button">
        <FaGit color="#793586" size={20} />
      </button>

      <button type="button">
        <FaDocker color="#793586" size={20} />
      </button>

      <button type="button">
        <FaYarn color="#793586" size={20} />
      </button>
    </Container>
  );
}
