import { useEffect, useState } from "react";
import ProductQuiz from "../components/ProductQuiz";

export default function QuizPage() {
    const [quizData, setQuizData] = useState(null);

    useEffect(() => {

        fetch('/path-to-fetch-quiz-data')
            .then(response => response.json())
            .then(data => setQuizData(data))
            .catch(error => console.error('Error fetching quiz data:', error));
    }, []);

    return (
        <div>
            <h1>Product Recommendation Quiz</h1>
            {quizData ? <ProductQuiz data={quizData} /> : <p>Loading quiz...</p>}
        </div>
    );
}