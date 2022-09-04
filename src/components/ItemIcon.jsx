import Spinner from "react-bootstrap/Spinner";
import React from "react";
import Card from "react-bootstrap/Card";
function ItemIcon({ item, status }) {
  const icon = `https://items-api.vercel.app/items/${item?.file}`;
  return (
    <Card
      className="mb-3 bg-light bg-gradient"
      style={{ width: "24.5rem", height: "24.5rem" }}
    >
      <Card.Body className="d-flex justify-content-center align-items-center">
        {status === "loading" ? (
          <Spinner animation="border" variant="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <div className="d-flex justify-content-center align-items-center flex-column">
          <img
            src={icon}
            className="rounded img-fluid"
            style={{ width: "22.5rem", height: "22.5rem" }}
            alt=""
            draggable="false"
          />
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ItemIcon;
