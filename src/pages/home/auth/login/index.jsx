import HomeHeader from "../../../../component/home/header/home-header.component";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { ButtonComponent } from "../../../../component/common/button/button.component";

const LoginTitle = styled.h1`
  color: #001900;
  text-align: center;
`;
const Divider = styled.hr`
  border-color: #001900;
`;
const LoginPage = () => {
  return (
    <>
      <HomeHeader />
      <Container className="login-wrapper m-5">
        <Row>
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <LoginTitle>Login Page</LoginTitle>
          </Col>
        </Row>
        <Divider />
        <Row className="my-3 pb-4">
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <FormGroupExample />
            Or,&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <a href="/register">Create an account</a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;

function FormGroupExample() {
  return (
    <Form>
      <Form.Group className=" row mb-3" controlId="formGroupEmail">
        <Form.Label className="col-sm-3">Username:</Form.Label>
        <Col sm={9}>
          <Form.Control
            type="email"
            placeholder="Enter your username"
            // className="col-md-6"
            size="sm"
            required
          />
          <span className="text-danger">
            <em></em>
          </span>
        </Col>
      </Form.Group>
      <Form.Group className="row mb-3" controlId="formGroupPassword">
        <Form.Label className="col-sm-3">Password:</Form.Label>
        <Col sm={9}>
          <Form.Control
            type="password"
            placeholder="Enter your Password"
            //className="col-md-6"
            size="sm"
            required
          />
          <span className="text-danger">
            <em></em>
          </span>
        </Col>
      </Form.Group>
      <Form.Group className="row mb-3" controlId="formGroupPassword">
        <Col sm={{ offset: 3, span: 9 }}>
          Or, &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/forget-password">Forget Password?</a>
        </Col>
      </Form.Group>
      <Form.Group className="row mb-3" controlId="formGroupPassword">
        <Col sm={{ offset: 3, span: 9 }}>
          <ButtonComponent
            type="reset"
            label="Cancel"
            className="btn-danger me-3"
          ></ButtonComponent>
          <ButtonComponent type="submit" label="Login"></ButtonComponent>
        </Col>
      </Form.Group>
    </Form>
  );
}
