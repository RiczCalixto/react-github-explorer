import React from 'react';
import {
  Title,
  SearchForm,
  RepositoriesList,
} from '../../styled-components/components.styles';
import logoImg from '../../assets/logo.svg';
import { ListItem } from './list-item.component';

const MOCK_SRC =
  'https://avatars1.githubusercontent.com/u/38529592?s=460&u=54d0d146c8eaf10d101ef47d124fb7c1f184a984&v=4';

export const DashboardPage: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios do Github.</Title>
      <SearchForm>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </SearchForm>
      <RepositoriesList>
        <ListItem src={MOCK_SRC} />
      </RepositoriesList>
    </>
  );
};
