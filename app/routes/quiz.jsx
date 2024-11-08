import { useEffect, useState } from "react";
import ProductQuiz from "../components/ProductQuiz";

export default function QuizPage() {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/quiz-data')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setQuizData(data);
        } else {
          console.error("Quiz data is empty or not available.");
        }
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
      ) : quizData ? (
        <ProductQuiz data={quizData} />
      ) : (
        <p>No quiz data available.</p>
      )}
    </div>
  );
}
