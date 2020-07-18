import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

interface ListItemProps {
  src: string;
}

export const ListItem: React.FC<ListItemProps> = ({ src }) => {
  return (
    <>
      <a href="Teste">
        <img src={src} alt="Ric" />
        <div>
          <strong>Rickz</strong>
          <p>Github do Ricardo</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="Teste">
        <img src={src} alt="Ric" />
        <div>
          <strong>Rickz</strong>
          <p>Github do Ricardo</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </>
  );
};
