import React from 'react'
import { useState, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

function AnswersList({answerType, itemReroll}) {
    const [answerCounter, setAnswerCounter] = useState(0);
    const [answers, setAnswers] = useState([]);
    useEffect(() => {
      if (answerType === "success") {
        setAnswers([...answers, "correct"]);
        setAnswerCounter(0);
      } else if (answerType === "danger") {
        setAnswerCounter((answerCounter) => answerCounter + 1);
      }
      console.log(answerCounter);
      console.log(answers);
    }, [answerType]);
    useEffect(() => {
      if (answerCounter === 3 && answerType === "danger") {
        setAnswers([...answers, "incorrect"]);
        setAnswerCounter(0);
        itemReroll();
      }
    }, [answerCounter]);
  return (
    <div className="d-flex justify-content-evenly align-items-center">
    {answers.map((answer, key) => (
          answer==="correct" ? <div className='p-2'><FaCheck className="text-success" key={key}/></div>: <div className='p-2'><FaTimes className="text-danger" key={key}/></div>
    ))}
    </div>
  )
}

export default AnswersList