import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import GameInput from "./GameInput";
import ItemIcon from "./ItemIcon";
import Hint from "./Hint";
import AnswersList from "./AnswersList";

const fetchItem = async () => {
  const URL = "https://items-api.vercel.app/api/item"; // my API
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data.item);
  return data.item;
};

function Hero() {
  const [text, setText] = useState("");
  const [answerType, setAnswerType] = useState("primary");
  const { data, status, refetch } = useQuery(["item"], fetchItem);
  const itemReroll = () => {
    refetch();
    setText("");
  };
  return (
    <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center mh-100">
      <AnswersList itemReroll={itemReroll} answerType={answerType}/>
      <ItemIcon item={data} status={status} />
      <Hint item={data} status={status} answerType={answerType} />
      <GameInput
        itemReroll={itemReroll}
        item={data}
        text={text}
        setText={setText}
        answerType={answerType}
        setAnswerType={setAnswerType}
      />
    </div>
  );
}

export default Hero;
