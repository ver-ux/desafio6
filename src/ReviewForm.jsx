import React, { useState } from 'react';

function ReviewForm({ bookId, onSubmitReview }) {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmitReview = () => {
    const review = {
      bookId,
      rating,
      reviewText,
    };

    // Enviar a avaliação para o servidor ou a fonte de dados
    onSubmitReview(review);

    // Limpar o formulário
    setRating(0);
    setReviewText('');
  };

  return (
    <div className="review-form">
      <h3>Escreva uma Avaliação</h3>
      <label>
        Classificação:
        <select value={rating} onChange={handleRatingChange}>
          <option value={0}>Selecione uma classificação</option>
          <option value={1}>1 - Muito Ruim</option>
          <option value={2}>2 - Ruim</option>
          <option value={3}>3 - Médio</option>
          <option value={4}>4 - Bom</option>
          <option value={5}>5 - Excelente</option>
        </select>
      </label>
      <br />
      <label>
        Comentário:
        <textarea
          value={reviewText}
          onChange={handleReviewTextChange}
          rows="4"
        />
      </label>
      <br />
      <button onClick={handleSubmitReview}>Enviar Avaliação</button>
    </div>
  );
}

export default ReviewForm;