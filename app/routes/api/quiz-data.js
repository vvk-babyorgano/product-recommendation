export const loader = async () => {
    // Simulate fetching quiz data (you can replace this with actual data from a database)
    const quizData = [
      {
        question: "What type of product are you looking for?",
        options: ["Hand Wash", "Body Wash"]
      },
      {
        question: "What is your skin type?",
        options: ["Dry", "Oily", "Combination"]
      }
    ];
  
    return json(quizData);
  };
  