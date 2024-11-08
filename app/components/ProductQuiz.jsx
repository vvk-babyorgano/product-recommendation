// ProductQuiz.jsx
import { useState } from "react";

const ProductQuiz = ({ data }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  if (!data || data.length === 0) {
    return <p>No quiz data available.</p>;
  }

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <div>
      {questionIndex < data.length ? (
        <div>
          <h2>{data[questionIndex].question}</h2>
          {data[questionIndex].options.map((option) => (
            <button key={option} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Thanks for completing the quiz!</h2>
          {/* You can also add a "showRecommendations" function here */}
        </div>
      )}
    </div>
  );
};

export default ProductQuiz;
