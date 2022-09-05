import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { FaRedoAlt } from "react-icons/fa";
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
    const lastAnswer = answers[answers.length - 1];
    if (lastAnswer === "correct") {
      setCountCorrect((countCorrect) => countCorrect + 1);
    } else if (lastAnswer === "incorrect") {
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
      backdrop="true"
      keyboard={false}
      centered
      size="sm"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header className="d-flex justify-content-center">
        <Modal.Title id="example-custom-modal-styling-title">
          Game Over
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <div className="p-2">Your final score is: {countCorrect}!</div>
        <div className="pb-4">{countCorrect===0?<h1>😭</h1>:<h1>👍</h1>}</div>
        <Button variant="primary" style={{"--bs-btn-font-size": "2rem", "--bs-btn-padding-y": ".5rem", "--bs-btn-padding-x": ".5rem"}} onClick={handleCloseResult}><FaRedoAlt className="d-flex justify-content-center align-items-center"/></Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default GameResult;
