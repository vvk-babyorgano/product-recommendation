import { json } from "@remix-run/node";

export const loader = async () => {

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
