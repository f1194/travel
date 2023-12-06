import { Col, Container, Row, Accordion} from "react-bootstrap";
import HeroImage from "../assets/img/summer2.png";
import { serviceTerbaru, dataSwiper } from "../data/index"
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const HomePage = () => {
  let navigate = useNavigate();

  return ( 
  <div className="homepage">
    <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="header-box d-flex align-items-center pt-lg-5">
          <Col lg="6">
          <h1 className="mb-4">
            Temukan <br /> <span>Liburan Yang Seru</span> <br />Bersama Kami!
            </h1>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ipsam id veniam, maiores harum aliquid nemo aliquam accusamus sed amet commodi error, magnam quis saepe nobis eaque deserunt sapiente sunt!</p>
            <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 ">Selengkapnya</button>
          </Col>
          <Col lg="6" className="pt-lg-0 pt-5">
          <img src={HeroImage} alt="hero-image" />
          </Col>
        </Row>
      </Container>
    </header>
    <div  className="aboutpage my-5" >
      <Container>
        <row>
          <Col>
          <h1 className="text-center fw-bold my-5">About</h1>
          </Col>
        </row>
        <Row>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Company overview</Accordion.Header>
        <Accordion.Body>
        Travel Express Indonesia didirikan pada tahun 2010 oleh Ibu Maria, 
        seorang pengusaha dengan pengalaman panjang di industri pariwisata. 
        Sejak berdiri, perusahaan terus berkembang dan menjadi salah satu penyedia jasa perjalanan terkemuka di Indonesia.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </Row>
    </Container>
    <div className="service w-100 min-vh-100">
      <Container>
        <Row>
          <Col>
          <h1 className="text-center fw-bold">Services</h1>
          </Col>
        </Row>
        <Row>
          {serviceTerbaru.map((service) => {
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
        <Row>
          <Col className="text-center">
          <button className="btn btn-success rounded-5 btn-lg" onClick={() => navigate("/service")}>Lihat Semua Service<i className="fa-solid fa-chevron-right ms-3"></i></button>
          
          </Col>
        </Row>
      </Container>
    </div>
    <div className="testimonial py-5">
      <Container>
        <Row>
          <Col>
          <h1 className="text-center fw-bold my-5">Testimonial</h1>
          </Col>
        </Row>
        <Row>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataSwiper.map((data) => {
          return (
            <SwiperSlide key={data.id} className="shadow-sm">
              <p className="desc">{data.desc}</p>
              <div className="people">
                <img src={data.image} alt="" />
                <div>
                  <h5 className="mb-1">{data.name}</h5>
                  <p className="m-0 fw-bold">{data.pekerjaan}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
        </Row>
      </Container>
    </div>
    </div>
  </div>
  );
};

export default HomePage;