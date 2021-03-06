import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { RepositoryState } from './dashboard.page';
import { Link } from 'react-router-dom';

interface ListItemProps {
  repository: RepositoryState;
}

export const ListItem: React.FC<ListItemProps> = ({ repository }) => {
  const { fullName, description, owner } = repository;
  const { login, avatarUrl } = owner;

  return (
    <>
      <Link to={`/repository/${fullName}`}>
        <img src={avatarUrl} alt={login} />
        <div>
          <strong>{fullName}</strong>
          <p>{description}</p>
        </div>
        <FiChevronRight size={20} />
      </Link>
    </>
  );
};
