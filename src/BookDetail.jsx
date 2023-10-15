import React from 'react';

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
  // Adicione mais livros conforme necessário
];

const reviews = [
  {
    bookId: 1,
    username: 'Leitor1',
    rating: 5,
    reviewText: 'Este livro é incrível!',
  },
  {
    bookId: 1,
    username: 'Leitor2',
    rating: 4,
    reviewText: 'Eu gostei, mas poderia ser melhor.',
  },
  // Adicione mais avaliações conforme necessário
];

function BookDetail({ match }) {
  const bookId = parseInt(match.params.id);

  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return <div>Livro não encontrado</div>;
  }

  const bookReviews = reviews.filter((review) => review.bookId === bookId);

  return (
    <div className="book-detail">
      <h2>Detalhes do Livro</h2>
      <h3>{book.title}</h3>
      <p>Autor: {book.author}</p>
      <p>{book.description}</p>

      <h3>Avaliações dos Leitores</h3>
      <ul>
        {bookReviews.map((review, index) => (
          <li key={index}>
            <p>Leitor: {review.username}</p>
            <p>Classificação: {review.rating}</p>
            <p>Comentário: {review.reviewText}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetail;