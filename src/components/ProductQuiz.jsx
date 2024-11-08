import { useState } from "react";

const ProductQuiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    { question: "What type of product are you looking for?", options: ["Hand Wash", "Body Wash"] },
    { question: "What is your skin type?", options: ["Dry", "Oily", "Combination"] },
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setQuestionIndex(questionIndex + 1);
  };

  const showRecommendations = () => {
    console.log(answers);
  };

  return (
    <div>
      {questionIndex < questions.length ? (
        <div>
          <h2>{questions[questionIndex].question}</h2>
          {questions[questionIndex].options.map((option) => (
            <button key={option} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Thanks for completing the quiz!</h2>
          <button onClick={showRecommendations}>See your recommendations</button>
        </div>
      )}
    </div>
  );
};

export default ProductQuiz;