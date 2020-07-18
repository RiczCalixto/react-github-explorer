import { RepositoryState } from './dashboard.page';

export interface RemoteRepository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export const mapRemoteRepository = (
  remoteRepository: RemoteRepository,
): RepositoryState => {
  const { id, full_name, description, owner } = remoteRepository;
  const { login, avatar_url } = owner;

  return {
    id,
    fullName: full_name,
    description,
    owner: {
      login,
      avatarUrl: avatar_url,
    },
  };
};
