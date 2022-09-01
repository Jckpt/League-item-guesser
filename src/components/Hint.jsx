import Spinner from "react-bootstrap/Spinner";
import React from "react";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

function Hint({ item, status, answerType }) {
  const [secretText, setSecretText] = useState([]);
  useEffect(() => {
    // makes for example Doran's shield ->  ["_ ", "_ ", "_ ", "_ ", "_ ", "'", "_ ",󠀀  "_ ", "_ ", "_ ", "_ ", "_ ", "_ "]
    setSecretText(
      item?.name.split("").map((char) => {
        if (char === " ") return char;
        else if (char === "'" || char === ".") return char;
        else return "_";
      })
    );
  }, [item]);
  useEffect(() => {
    // if user has a wrong guess it reveals random amount of characters
    let temp = secretText;
    if (answerType === "danger") {
      temp = temp.map((character, i) => {
        let revealOrNot = Math.random() > 0.7 ? 1 : 0;
        if (revealOrNot && character == "_") {
          return item.name[i];
        } else {
          return character;
        }
      });
      setSecretText(temp);
    }
  }, [answerType]);
  return (
    <Card
      bg="dark"
      variant="dark"
      className="mb-3 bg-gradient"
      style={{ minWidth: "24.5rem", height: "4rem" }}
    >
      <Card.Body className="d-flex justify-content-center align-items-center">
        {status === "loading" ? (
          <Spinner animation="border" variant="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <div className="d-flex justify-content-center text-light align-items-center user-select-none">
            {secretText && secretText.map((char, key) => (
              char===" " ? <div className="p-2 h5" key={key}>{char}</div>: char==="_" ? <div className="p-1 h5" key={key}>{char}</div> : <div className="h5" key={key}>{char}</div>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default Hint;
