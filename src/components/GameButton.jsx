import React from 'react'
import Button from "react-bootstrap/Button";
import { FaCheck, FaTimes } from "react-icons/fa";
function GameButton({answerType, isLoading, handleNextBtnClick, handleClick, nextBtnState}) {
  return (
    <>
    {nextBtnState ? (
        <Button
          className="mt-3 w-100"
          variant={answerType}
          disabled={isLoading}
          onClick={!isLoading ? handleNextBtnClick : null}
        >Next</Button>
      ) : (
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
      )}
  </>
)};

export default GameButton