import { Container, Row, Col, Accordion } from "react-bootstrap";
import { team } from "../data/index";


const AboutPage = () => {
  return (
    <div className='about-page'>
      <div className='about'>
        <Container>
          <Row>
            <Col>
            <h1 className='text-center fw-bold'>About Company</h1>
            </Col>
          </Row>
          <Row className="accordion">
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Company History</Accordion.Header>
        <Accordion.Body>
        Travel Express Indonesia didirikan pada tahun 2010 oleh Ibu Maria, 
        seorang pengusaha dengan pengalaman panjang di industri pariwisata. 
        Sejak berdiri, perusahaan terus berkembang dan menjadi salah satu penyedia jasa perjalanan terkemuka di Indonesia.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          </Row>
          <Row>
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Company Culture</Accordion.Header>
        <Accordion.Body>
        <p>1. Kami memprioritaskan kepuasan pelanggan dan berusaha memberikan pengalaman wisata terbaik yang memenuhi dan melampaui harapan mereka.</p>
        <p>2. Kami merayakan keberagaman dan mempromosikan inklusivitas, menghargai kontribusi unik setiap anggota tim dan pelanggan dari berbagai latar belakang.</p>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          </Row>
          <Row>
            <Col>
            <h1 className='text-center fw-bold'>Company Team</h1>
            </Col>
          </Row>
          <Row className='row-cols-lg-4 row-cols-1'>
          {team.map((data) => {
          return (
            <Col key={data.id} className="mb-5">
              <p className="desc shadow-sm text-align-center">{data.desc}</p>
              <div className="people">
                <img src={data.image} alt="" />
                <div>
                  <h5 className="mb-1">{data.name}</h5>
                  <p className="m-0 fw-bold">{data.jabatan}</p>
                  <p className="m-0 fw-bold">{data.gelar}</p>
                </div>
              </div>
            </Col>
          )
        })}
          </Row>
        </Container>
      </div>
    </div>
  )
  
}

export default AboutPage;