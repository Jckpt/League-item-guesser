import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import GameInput from "./GameInput";
import ItemIcon from "./ItemIcon";
import Hint from "./Hint";
import AnswersList from "./AnswersList";
import {fetchItem} from "../utility/fetchItem";
import GameResult from "./GameResult";

function Hero() {
  const [answers, setAnswers] = useState([]);
  const [text, setText] = useState("");
  const [answerType, setAnswerType] = useState("primary");
  const [answerCounter, setAnswerCounter] = useState(0);
  const { data, status, refetch } = useQuery(["item"], fetchItem);
  const itemReroll = () => {
    refetch();
    setText("");
  };
  return (
    <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center mh-100">
      <AnswersList itemReroll={itemReroll} answerType={answerType} answers={answers} setAnswers={setAnswers} answerCounter={answerCounter} setAnswerCounter={setAnswerCounter}/>
      <ItemIcon item={data} status={status} />
      <Hint item={data} status={status} answerType={answerType} />
      <GameInput
        itemReroll={itemReroll}
        item={data}
        text={text}
        setText={setText}
        answerType={answerType}
        setAnswerType={setAnswerType}
        answerCounter={answerCounter}
        setAnswerCounter={setAnswerCounter}
      />
      <GameResult answers={answers} setAnswers={setAnswers}/>
    </div>
  );
}

export default Hero;
