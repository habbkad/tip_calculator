import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import TipButtonCon from "../tips_buttons/tip_button_con";
import Output from "../tip_output/output";
import "./cal_container.css";
const CalContainer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <TipButtonCon />
          </Col>
          <Col sm={12} md={6} className=" ">
            <Output />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CalContainer;
