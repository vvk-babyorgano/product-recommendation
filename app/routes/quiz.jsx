import { useEffect, useState } from "react";
import ProductQuiz from "../components/ProductQuiz";

export default function QuizPage() {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/quiz-data')
      .then((response) => response.json())
      .then((data) => {
        setQuizData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching quiz data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Product Recommendation Quiz</h1>
      {loading ? (
        <p>Loading quiz...</p>
      ) : (
        <ProductQuiz data={quizData} />
      )}
    </div>
  );
}