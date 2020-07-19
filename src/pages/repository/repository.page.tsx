import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import {
  Header,
  RepositoryInfo,
  IssuesList,
} from '../../styled-components/components.styles';
import { ListItem } from '../dashboard/list-item.component';

interface NavigationParams {
  fullName: string;
}

export const RepositoryPage: React.FC = () => {
  const { params } = useRouteMatch<NavigationParams>();

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
          <img src="https://avatars2.githubusercontent.com/u/739839?s=200&v=4" />
          <div>
            <strong>fulleName</strong>
            <span>description</span>
          </div>
        </header>
        <ul>
          <li>
            <strong>1080</strong>
            <span>star</span>
          </li>
          <li>
            <strong>123</strong>
            <span>forks</span>
          </li>
          <li>
            <strong>77</strong>
            <span>issues</span>
          </li>
        </ul>
        <IssuesList>
          <Link to={`/repository/`}>
            <div>
              <strong>Casa</strong>
              <p>Joana</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        </IssuesList>
      </RepositoryInfo>
    </>
  );
};
