import { useState, useEffect } from "react";
import ProductQuiz from "../../src/components/ProductQuiz";

export default function QuizPage() {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    fetch('/api/quiz-data')
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => setQuizData(data))
      .catch((error) => console.error('Error fetching quiz data:', error));
  }, []);

  return (
    <div>
      <h1>Product Recommendation Quiz</h1>
      {quizData.length > 0 ? (
        <ProductQuiz data={quizData} />
      ) : (
        <p>No quiz data available.</p>
      )}
    </div>
  );
}
