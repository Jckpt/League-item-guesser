import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
function GameResult({ answers, setAnswers }) {
  const [countCorrect, setCountCorrect] = useState(0);
  const [countIncorrect, setCountIncorrect] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const handleCloseResult = () => {
    setCountCorrect(0);
    setCountIncorrect(0);
    setAnswers([]);
    setShowResult(false);
  };
  useEffect(() => {
    const answer = answers[answers.length - 1];
    if (answer === "correct") {
      setCountCorrect((countCorrect) => countCorrect + 1);
    } else if (answer === "incorrect") {
      setCountIncorrect((countIncorrect) => countIncorrect + 1);
    }
  }, [answers]);
  useEffect(() => {
    if (countIncorrect === 3) {
      setShowResult(true);
    }
  }, [countIncorrect]);
  return (
    <Modal
      show={showResult}
      onHide={handleCloseResult}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          You've lost!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Your final score is: {countCorrect}!
      </Modal.Body>
    </Modal>
  );
}

export default GameResult;
