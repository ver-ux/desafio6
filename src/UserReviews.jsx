import React from 'react';

const userReviews = [
  {
    id: 1,
    bookTitle: 'Livro 1',
    rating: 5,
    reviewText: 'Este livro é incrível!',
  },
  {
    id: 2,
    bookTitle: 'Livro 2',
    rating: 4,
    reviewText: 'Eu gostei, mas poderia ser melhor.',
  },
  // Adicione mais avaliações do usuário conforme necessário
];

function UserReviews({ username }) {
  const reviewsByUser = userReviews.filter((review) => review.username === username);

  if (reviewsByUser.length === 0) {
    return <div>Nenhuma avaliação encontrada para o usuário {username}.</div>;
  }

  return (
    <div className="user-reviews">
      <h2>Avaliações de {username}</h2>
      <ul>
        {reviewsByUser.map((review) => (
          <li key={review.id}>
            <h3>{review.bookTitle}</h3>
            <p>Classificação: {review.rating}</p>
            <p>Comentário: {review.reviewText}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserReviews;