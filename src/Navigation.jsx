import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Página Inicial</Link>
        </li>
        <li>
          <Link to="/books">Livros</Link>
        </li>
        <li>
          <Link to="/reviews">Avaliações</Link>
        </li>
        {/* Adicione mais links conforme necessário */}
      </ul>
    </nav>
  );
}

export default Navigation;