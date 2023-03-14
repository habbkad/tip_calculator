import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./output.css";
import { setReset } from "../../redux/reducer/tip_reducer";
import { useSelector, useDispatch } from "react-redux";

const Output = () => {
  const { tip, total } = useSelector((state) => state.tip);
  const dispatch = useDispatch();
  console.log(tip);

  return (
    <Container className="pt-4 output_con ">
      <Row className="mb-4">
        <Col>
          <p className="fontSmall2 mb-0 mt-3 ">Tip Anmount</p>
          <p className="fontSmall mx-1">/ person</p>
        </Col>
        <Col className="text-end">
          <p className=" fontOutput">
            {tip > 0 ? `$${tip.toFixed(2)}` : `$${0}`}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="fontSmall2 mb-0 mt-3">Total</p>
          <p className="fontSmall mx-1">/ person</p>
        </Col>
        <Col className="text-end ">
          <p className=" fontOutput ">
            {tip > 0 ? `$${total.toFixed(2)}` : `$${0}`}
          </p>
        </Col>
      </Row>
      <Row>
        <Col className=" mx-auto">
          {" "}
          <Button
            variant="secondary"
            className="reset_btn "
            onClick={(e) => {
              window.location.reload();
            }}
          >
            Reset
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Output;
