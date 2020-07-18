import React, { useState, FormEvent, ChangeEvent } from 'react';
import {
  Title,
  SearchForm,
  RepositoriesList,
} from '../../styled-components/components.styles';
import logoImg from '../../assets/logo.svg';
import { ListItem } from './list-item.component';
import { api } from '../../services/api';
import { mapRemoteRepository, RemoteRepository } from './dashboard.mapper';

export interface RepositoryState {
  id: number;
  fullName: string;
  description: string;
  owner: Owner;
}

interface Owner {
  login: string;
  avatarUrl: string;
}

export const DashboardPage: React.FC = () => {
  const [repositories, setRepositories] = useState<RepositoryState[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await api.get<RemoteRepository>(`repos/${inputValue}`);
    const repository = mapRemoteRepository(response?.data);

    setRepositories([...repositories, repository]);
    setInputValue('');
  };

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios do Github.</Title>
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Digite o nome do repositório"
          onChange={handleChangeValue}
          value={inputValue}
        />
        <button type="submit">Pesquisar</button>
      </SearchForm>
      <RepositoriesList>
        {repositories.map(repository => (
          <ListItem key={repository.id} repository={repository} />
        ))}
      </RepositoriesList>
    </>
  );
};
