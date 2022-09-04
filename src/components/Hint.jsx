import Spinner from "react-bootstrap/Spinner";
import React from "react";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { revealCharacters } from "../utility/revealCharacters";
import {hideText } from "../utility/hideText";
function Hint({ item, status, answerType }) {
  const [secretText, setSecretText] = useState([]);
  useEffect(() => {
    setSecretText(hideText(item?.name));
  }, [item]);
  useEffect(() => {
    if (answerType === "danger") {
        setSecretText(revealCharacters(secretText,item.name));
    }
  }, [answerType]);
  return (
    <Card
      className="mb-3 bg-light bg-gradient"
      style={{ minWidth: "24.5rem", height: "4rem" }}
    >
      <Card.Body className="d-flex justify-content-center align-items-center">
        {status === "loading" ? (
          <Spinner animation="border" variant="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <div className="d-flex justify-content-center align-items-center user-select-none">
            {secretText &&
              secretText.map((char, key) =>
                char === " " ? (
                  <div className="p-2 h5" key={key}>
                    {char}
                  </div>
                ) : char === "_" ? (
                  <div className="p-1 h5" key={key}>
                    {char}
                  </div>
                ) : (
                  <div className="h5" key={key}>
                    {char}
                  </div>
                )
              )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default Hint;
