"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

const Quiz = () => {
  const [tab, setTab] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([] as string[]);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correct: "Paris",
    },
    {
      question: "What is the capital of Germany?",
      options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
      correct: "Berlin",
    },
  ];

  const handleOnSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleOnNext = () => {
    if (tab === questions.length) {
      return;
    }
    if (selectedAnswer === questions[tab].correct) {
      setScore(score + 1);
    }
    setAnswers([...answers, selectedAnswer]);
    setSelectedAnswer("");
    setTab(tab + 1);
  };

  const handleReset = () => {
    setTab(0);
    setScore(0);
    setAnswers([]);
  };

  return (
    <>
      <div className="border-2 p-4">
        {tab <= questions.length - 1 ? (
          <div>
            <h1 className="text-2xl font-bold mb-4">
              {questions[tab].question}
            </h1>
            <div className="mb-4">
              <RadioGroup defaultValue="comfortable">
                {questions[tab].options.map((option, index) => (
                  <div className="flex items-center space-x-2" key={index}>
                    <RadioGroupItem
                      value={option}
                      id={option}
                      onClick={(event) =>
                        handleOnSelect(
                          (event.currentTarget as HTMLInputElement).value
                        )
                      }
                    />
                    <Label htmlFor={option}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <Button className="" onClick={handleOnNext}>
              {tab === questions.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold mb-4">{`You scored ${score} out of ${questions.length}`}</h1>
            <div>
              <h2 className="text-xl font-bold mb-4 underline">Answers</h2>
              <div>
                {questions.map((question, index) => (
                  <div className="mt-2">
                    <p className="font-bold">{question.question}</p>
                    <div>Your answer: {answers[index]}</div>
                    <div>Correct answer: {question.correct}</div>
                  </div>
                ))}
              </div>
              <Button className="mt-2" onClick={handleReset}>
                Try Again
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
