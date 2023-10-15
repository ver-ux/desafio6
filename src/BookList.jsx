import React from 'react';
import './BookList.css';
import styles from './BookList.module.css';


const BookListWrapper = styles.div`
  padding: 20px;
`;

const BookListItem = styles.li`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
`;

const books = [
    {
      id: 1,
      title: 'Livro 1',
      author: 'Autor 1',
      description: 'Descrição do Livro 1',
    },
    {
      id: 2,
      title: 'Livro 2',
      author: 'Autor 2',
      description: 'Descrição do Livro 2',
    },
  ];

function BookList() {
    return (
      <div className="book-list">
        <h2>Lista de Livros</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>Autor: {book.author}</p>
              <p>{book.description}</p>
              <a href={`/book/${book.id}`}>Detalhes</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default BookList;