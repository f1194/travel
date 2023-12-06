import { Col, Container, Row } from "react-bootstrap";
import { semuaService, testimonial } from "../data/index";

const ServicePage = () => {
  return (
    <div className="service-page">    
    <div className="service min-vh-100">
      <Container>
        <Row>
          <Col>
          <h1 className="fw-bold text-center">All Services</h1>
          </Col>
        </Row>
        <Row>
        {semuaService.map((service) => {
            return <Col key={service.id}>
              <img src={service.image} alt="unsplash.com" className="w-100 mb-5 rounded-top" />
              <div className="star mb-2 px-3">
                <i className={service.star1}></i>
                <i className={service.star2}></i>
                <i className={service.star3}></i>
                <i className={service.star4}></i>
                <i className={service.star5}></i>
              </div>
              <h5 className="mb-5 px-3">{service.title}</h5>
              <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                <p className="m-0 text-primary fw-bold">{service.price}</p>
                <button className="btn btn-danger rounded-1">{service.buy}</button>
              </div>
            </Col>
          })}
        </Row>
        <div className="testimonial-page">
          <div className="testimonial">
            <Container>
              <Row className="mb-5">
                <Col>
                  <h1 className="text-center fw-bold">Testimonial</h1>
                </Col>
              </Row>
              <Row>
                {testimonial.map((data) => {
          return (
            <Col key={data.id} className="mb-5 text-align-justify">
              <p className="desc shadow-sm">{data.desc}</p>
              <div className="people">
                <img src={data.image} alt="" />
                <div>
                  <h5 className="mb-1">{data.name}</h5>
                  <p className="m-0 fw-bold">{data.pekerjaan}</p>
                </div>
              </div>
            </Col>
          )
        })}
              </Row>
            </Container>
          </div>
        </div>
      </Container>
    </div>
    </div>
  )
}

export default ServicePage;