import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Error404 = () => {
  return (
    <>
      <Container className="my-5 " style={{ background: "#ff000029" }}>
        <Row>
          <Col sm={12} className="text-center p-3">
            <p className="text-danger">
              Oops! Your requested page does not exist.
            </p>
            <p className="text-danger">
              Redirect back to{" "}
              <NavLink to={"/"} className="text-decoration-none">
                Home.
              </NavLink>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
