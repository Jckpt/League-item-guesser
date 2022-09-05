import React from "react";
import { useState, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

function AnswersList({ answerType, setAnswers, answers, answerCounter, setAnswerCounter }) {
  useEffect(() => {
    if (answerType === "success") {
      setAnswers([...answers, "correct"]);
    } else if (answerType === "danger") {
      setAnswerCounter((answerCounter) => answerCounter + 1);
    }
  }, [answerType]);

  useEffect(() => {
    if (answerCounter === 3) {
      setAnswers([...answers, "incorrect"]);
    }
  }, [answerCounter]);

  return (
    <div
      className="d-flex justify-content-evenly align-items-center"
      style={{ minHeight: "40px" }}
    >
      {answers.map((answer, key) =>
        answer === "correct" ? (
          <div className="p-2">
            <FaCheck className="text-success" key={key} />
          </div>
        ) : (
          <div className="p-2">
            <FaTimes className="text-danger" key={key} />
          </div>
        )
      )}
    </div>
  );
}

export default AnswersList;
