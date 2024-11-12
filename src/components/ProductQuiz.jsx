import React from 'react';

const ProductQuiz = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.question}</h2>
          {item.options.map((option, idx) => (
            <button key={idx}>{option}</button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductQuiz;
