import { React, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ShakeHorizontal } from "reshake";
import { FaCheck, FaTimes } from "react-icons/fa";
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
}) {
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => setLoading(true);
  useEffect(() => {
    if (isLoading) {
      const allNames = item?.alternativeName.map((name) => name.toLowerCase());
      allNames.push(item.name.toLowerCase());
      console.log(allNames);
      // delays next button press by 0.4s if the answer is correct and rerolls the item
      if (allNames.includes(text.toLowerCase())) {
        setAnswerType("success");
        buttonCooldown(400).then(() => {
          setAnswerType("primary");
          setLoading(false);
          itemReroll();
        });
      } 
      // delays next button press by 0.5s if the answer is incorrect
        else {
        setAnswerType("danger");
        buttonCooldown(500).then(() => {
          setAnswerType("primary");
          setLoading(false);
        });
      }
    }
  }, [isLoading]);
  const onChangeHandler = (event) => {
    setText(event.target.value);
  };
  return (
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
      <Card
        bg="dark"
        className="bg-gradient"
        variant="dark"
        style={{ width: "24.5rem" }}
      >
        <Card.Body className="d-flex flex-column justify-content-center">
          <Form.Control
            type="text"
            placeholder="Name of the item"
            className="text-center text-white bg-dark border-dark"
            value={text}
            onChange={onChangeHandler}
          />
          <Button
            className="mt-3"
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
        </Card.Body>
      </Card>
    </ShakeHorizontal>
  );
}

export default GameInput;
