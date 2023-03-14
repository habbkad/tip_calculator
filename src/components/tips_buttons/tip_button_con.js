import React, { useEffect, useState } from "react";
import { InputGroup, Form, Container, Col } from "react-bootstrap";
import "./tip_button_con.css";
import { useDispatch, useSelector } from "react-redux";
import { set_Total, set_tip, setReset } from "../../redux/reducer/tip_reducer";
import personLogo from "../../icons/icon-person.svg";
const TipButtonCon = () => {
  const dispatch = useDispatch();
  const [tipPercentage, setPercentage] = useState(0);
  const [bills, setBill] = useState(0);
  const [num_people, setNum] = useState(0);

  //calculate Tip
  if (tipPercentage !== 0 && bills !== 0 && num_people !== 0) {
    let tipPerperson = (bills / num_people) * (tipPercentage / 100);

    if (tipPerperson !== NaN) {
      let totalPerperson = bills / num_people + tipPerperson;
      dispatch(set_tip(tipPerperson));
      dispatch(set_Total(totalPerperson));
    }
  }

  return (
    <Container>
      <p className="fontSmall mb-1">Bill</p>
      <InputGroup className="mb-3 input">
        <Form.Control
          className="fontInput amount"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="0"
          onChange={(e) => {
            setBill(e.target.value);
          }}
        />
      </InputGroup>
      <br />
      {/* tip buttons */}

      <div>
        <div className="tip_percentage_btns">
          <p className="fontSmall mb-1">Select Tip %</p>
          <div>
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3   ">
              <div class="col ">
                <button
                  type="button"
                  class={
                    tipPercentage == 5
                      ? "btn btn-light btn_tip_selected mb-2 fontBold "
                      : "btn btn-light btn_tip mb-2 fontBold "
                  }
                  onClick={(e) => {
                    setPercentage(5);
                  }}
                >
                  5%
                </button>
              </div>
              <div class="col ">
                <button
                  type="button"
                  class={
                    tipPercentage == 10
                      ? "btn btn-light btn_tip_selected mb-2 fontBold "
                      : "btn btn-light btn_tip mb-2 fontBold "
                  }
                  onClick={(e) => {
                    setPercentage(10);
                  }}
                >
                  10%
                </button>
              </div>
              <div class="col ">
                <button
                  type="button"
                  class={
                    tipPercentage == 15
                      ? "btn btn-light btn_tip_selected mb-2 fontBold "
                      : "btn btn-light btn_tip mb-2 fontBold "
                  }
                  onClick={(e) => {
                    setPercentage(15);
                  }}
                >
                  15%
                </button>
              </div>
              <div class="col ">
                <button
                  type="button"
                  class={
                    tipPercentage == 25
                      ? "btn btn-light btn_tip_selected mb-2 fontBold "
                      : "btn btn-light btn_tip mb-2 fontBold "
                  }
                  onClick={(e) => {
                    setPercentage(25);
                  }}
                >
                  25%
                </button>
              </div>
              <div class="col ">
                <button
                  type="button"
                  class={
                    tipPercentage == 50
                      ? "btn btn-light btn_tip_selected mb-2 fontBold "
                      : "btn btn-light btn_tip mb-2 fontBold "
                  }
                  onClick={(e) => {
                    setPercentage(50);
                  }}
                >
                  50%
                </button>
              </div>
              <div class="col ">
                <InputGroup className=" custom_tip ">
                  <Form.Control
                    className="fontInput px-2"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Custom"
                    onChange={(e) => {
                      setPercentage(e.target.value);
                    }}
                  />
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="people_num">
        <div className="row justify-content-between">
          <Col md={6}>
            <p className="fontSmall mb-1 ">Number of People </p>
          </Col>
          <Col md={5}>
            {bills == 0 ? (
              <p className="fontSmallCausion mb-1 ">Cannot be zero </p>
            ) : (
              <p></p>
            )}
          </Col>
        </div>{" "}
        <div>
          {" "}
          <InputGroup className="mb-1 input ">
            <div className="input-icon"></div>
            <Form.Control
              aria-label="Default"
              className="fontInput"
              aria-describedby="inputGroup-sizing-default"
              placeholder="0"
              onChange={(e) => {
                setNum(e.target.value);
              }}
            />
          </InputGroup>
        </div>
      </div>
    </Container>
  );
};

export default TipButtonCon;
