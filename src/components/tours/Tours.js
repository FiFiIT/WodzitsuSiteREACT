import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Button } from "react-bootstrap";
import grecja from "./grecja.jpg";

const Tours = ({ dataType }) => {
  return (
    <Card className="ml-2 mt-2" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={grecja} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">card subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Tours;
