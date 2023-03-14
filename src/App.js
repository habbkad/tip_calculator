import logo from "./logo.svg";
import "./App.css";
import CalContainer from "./components/calculator_container/cal_container";
import { Container, Row, Col } from "react-bootstrap";
import logos from "../src/icons/logo.svg";

function App() {
  return (
    <div className="App">
      <Container className="title text-center ">
        <Row>
          <Col sm={12} md={12} className="mb-0">
            <img src={logos} className="logoImg " />
          </Col>
        </Row>
      </Container>
      <div className="tip_con">
        <CalContainer />
      </div>
    </div>
  );
}

export default App;
