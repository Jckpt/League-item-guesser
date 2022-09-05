import { React, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ShakeHorizontal } from "reshake";
import { FaCheck, FaTimes } from "react-icons/fa";
import useTimeout from "../utility/useTimeout";
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
  setAnswerCounter
}) {
  const [isLoading, setLoading] = useState(false);
  const { reset } = useTimeout(() => {
    setAnswerType("primary");
    setLoading(false);
    if (answerType === "success" || answerCounter===3) {
      setAnswerCounter(0);
      itemReroll();
    }
  }, 500);
  const handleClick = () => setLoading(true);
  useEffect(() => {
    if (isLoading) {
      const allNames = item?.alternativeName.map((name) => name.toLowerCase());
      allNames.push(item.name.toLowerCase());
      console.log(allNames);
      if (allNames.includes(text.toLowerCase())) {
        setAnswerType("success");
        reset();
      }
      else {
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
          <Button
            className="mt-3 w-100"
            variant={answerType}
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
          >
            {answerType === "danger" ? (
              <FaTimes />
            ) : answerType === "success" ? (
              <FaCheck />
            ) : (
              "Enter"
            )}
          </Button>
        </ShakeHorizontal>
      </Card.Body>
    </Card>
  );
}

export default GameInput;
