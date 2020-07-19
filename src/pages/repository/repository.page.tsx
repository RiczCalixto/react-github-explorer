import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import {
  Header,
  RepositoryInfo,
  IssuesList,
} from '../../styled-components/components.styles';
import { api } from '../../services/api';

interface NavigationParams {
  fullName: string;
}

interface RepositoryDetailsState {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface IssueState {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

export const RepositoryPage: React.FC = () => {
  const { params } = useRouteMatch<NavigationParams>();
  const [repository, setRepository] = useState<RepositoryDetailsState | null>(
    null,
  );
  const [issues, setIssues] = useState<IssueState[]>([]);

  useEffect(() => {
    async function loadData(): Promise<void> {
      const [remoteRepository, remoteIssues] = await Promise.all([
        api.get(`/repos/${params.fullName}`),
        api.get(`/repos/${params.fullName}/issues`),
      ]);
      console.log(remoteRepository.data);
      console.log(remoteIssues.data);
      setRepository(remoteRepository.data);
      setIssues(remoteIssues.data);
      // setRepository(remoteRepository.data);
      // setIssues(remoteIssues.data);
    }

    loadData();
  }, [params.fullName]);

  return (
    <>
      <Header>
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
        <img src={logoImg} alt="Github Explorer icon" />
      </Header>
      <RepositoryInfo>
        <header>
          <img src={repository?.owner?.avatar_url} />
          <div>
            <strong>{repository?.full_name}</strong>
            <span>{repository?.description}</span>
          </div>
        </header>
        <ul>
          <li>
            <strong>{repository?.stargazers_count}</strong>
            <span>star</span>
          </li>
          <li>
            <strong>{repository?.forks_count}</strong>
            <span>forks</span>
          </li>
          <li>
            <strong>{repository?.open_issues_count}</strong>
            <span>issues</span>
          </li>
        </ul>
      </RepositoryInfo>
      <IssuesList>
        {issues?.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </IssuesList>
    </>
  );
};
