import { React, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { ShakeHorizontal } from "reshake";
import useTimeout from "../utility/useTimeout";
import GameButton from "./GameButton";
import "../App.css";

function buttonCooldown(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

function GameInput({
  setText,
  text,
  item,
  itemReroll,
  answerType,
  setAnswerType,
  answerCounter,
  setAnswerCounter,
}) {
  const [isLoading, setLoading] = useState(false);
  const [nextBtnState, setnextBtnState] = useState(false);
  const { reset } = useTimeout(() => {
    setAnswerType("primary");
    setLoading(false);
    if (answerType === "success") {
      setAnswerCounter(0);
      itemReroll();
    } else if (answerCounter === 3) {
      setAnswerCounter(0);
      setAnswerType("info");
      setnextBtnState(true);
    }
  }, 500);
  
  const handleClick = () => setLoading(true);
  const handleNextBtnClick = () => {
    setnextBtnState(false);
    setAnswerType("primary");
    itemReroll();
  }
  useEffect(() => {
    if (isLoading) {
      const allNames = item?.alternativeName.map((name) => name.toLowerCase());
      allNames.push(item.name.toLowerCase());
      console.log(allNames);
      if (allNames.includes(text.toLowerCase())) {
        setAnswerType("success");
        reset();
      } else {
        setAnswerType("danger");
        reset();
      }
    }
  }, [isLoading]);
  const onChangeHandler = (event) => {
    setText(event.target.value);
  };
  return (
    <Card
      bg="light"
      className="bg-gradient"
      variant="light"
      style={{ width: "24.5rem" }}
    >
      <Card.Body className="d-flex flex-column justify-content-center">
        <Form.Control
          type="text"
          placeholder="Name of the item"
          className="text-center"
          value={text}
          onChange={onChangeHandler}
          disabled={nextBtnState}
        />
        <ShakeHorizontal
          h={5}
          v={0}
          r={0}
          dur={500}
          int={4}
          max={100}
          fixed={true}
          fixedStop={false}
          freez={false}
          active={answerType === "danger"}
        >
          <GameButton answerType={answerType} nextBtnState={nextBtnState} isLoading={isLoading} handleNextBtnClick={handleNextBtnClick} handleClick={handleClick}/>
        </ShakeHorizontal>
      </Card.Body>
    </Card>
  );
}

export default GameInput;
