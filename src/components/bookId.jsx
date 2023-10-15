import React from 'react';

function BookReviews({ bookId }) {
  // eslint-disable-next-line no-undef
  const reviews = bookReviews.filter((review) => review.bookId === bookId);

  return (
    <div>
      <h3>Avaliações do Livro</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>Usuário: {review.username}</p>
            <p>Classificação: {review.rating}</p>
            <p>Comentário: {review.reviewText}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookReviews;