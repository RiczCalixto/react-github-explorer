import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import {
  Error,
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

const APP_ID = '@GithubExplorer:repositories';

export const DashboardPage: React.FC = () => {
  const storagedRepositories = (): RepositoryState[] => {
    const savedRepositories = localStorage.getItem(APP_ID);
    return savedRepositories ? JSON.parse(savedRepositories) : [];
  };
  const [repositories, setRepositories] = useState<RepositoryState[]>(
    storagedRepositories,
  );
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    localStorage.setItem(APP_ID, JSON.stringify(repositories));
  }, [repositories]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue)
      return setErrorMessage('Favor digitar autor/repositório para buscar.');
    try {
      const response = await api.get<RemoteRepository>(`repos/${inputValue}`);
      const repository = mapRemoteRepository(response?.data);

      setRepositories([...repositories, repository]);
      setInputValue('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Repositório ou autor inexistente');
    }
  };

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />

      <Title>Explore repositórios do Github.</Title>

      <SearchForm onSubmit={handleSubmit} hasError={!!errorMessage}>
        <input
          placeholder="Digite o nome do repositório"
          onChange={handleChangeValue}
          value={inputValue}
        />
        <button type="submit">Pesquisar</button>
      </SearchForm>

      {errorMessage && (
        <Error>
          <strong>{errorMessage}</strong>
        </Error>
      )}

      <RepositoriesList>
        {repositories.map(repository => (
          <ListItem key={repository.id} repository={repository} />
        ))}
      </RepositoriesList>
    </>
  );
};
