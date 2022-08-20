import { React, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ShakeHorizontal  } from 'reshake'
import { FaCheck, FaTimes } from 'react-icons/fa';
import "../App.css";

const x = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>;

function buttonCooldown(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

function GameInput({ setText, text, allNames, itemReroll }) {
  const [isLoading, setLoading] = useState(false);
  const [buttonVariant, setButtonVariant] = useState("primary");
  useEffect(() => {
    if (isLoading) {
      if(allNames?.includes(text.toLowerCase())){
        setButtonVariant("success");
        buttonCooldown(400).then(() => {
          setButtonVariant("primary");
          setLoading(false);
          itemReroll();
        });
      }
      else{
        setButtonVariant("danger");
        buttonCooldown(500).then(() => {
          setButtonVariant("primary");
          setLoading(false);
        });
      }
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  const onChangeHandler = (event) => {
    setText(event.target.value);
  };
  return (
    <ShakeHorizontal 
            h={5}
        v={0}
        r={0}
        dur={1000}
        int={3}
        max={50}
        fixed={true}
        fixedStop={false}
        freez={false}
        active={buttonVariant==="danger"}>
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
          variant={buttonVariant}
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        >
          {buttonVariant==="danger" ? <FaTimes/> : buttonVariant==="success" ? <FaCheck/> : "Enter"}
        </Button>
      </Card.Body>
    </Card>
    </ShakeHorizontal >
  );
}

export default GameInput;
