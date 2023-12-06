import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
  <div className="footer py-5">
    <Container>
      <Row className="d-flex justify-content-between">
        <Col lg="5">
        <h3 className="fw-bold">Travel EXPRESS</h3>
        <p className="desc">Lorem</p>
        <div className="no mb-1 mt-4">
          <Link className="text-decoration-none">
          <i className="fa-brands fa-whatsapp "></i>
          <p className="m-0">+62 831-2924-4594</p>
          </Link>
        </div>
        <div className="mail">
          <Link className="text-decoration-none">
            <i className="fa-regular fa-envelope"></i>
            <p className="m-0">Lorem@gmail.com</p>
          </Link>
        </div>
        </Col>
        <Col className="d-flex flex-column ol-lg-2 col mt-lg-0 mt05">
        <h5 className="fw-bold">Menu</h5>
        <Link to="">Home</Link>
        <Link to="About">About</Link>
        <Link to="Service">Service</Link>
        <Link to="Team">Team</Link>
        </Col>
        <Col lg="4" className="mt-lg-0 mt-5">
        <h5 className="fw-bold mb-2">Follow Kami</h5>
        <div className="social mt-3">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by Travel EXPRESS, All Right Reserved</p>
        </Col>
      </Row>
    </Container>
  </div>
  )
};

export default FooterComponent