import { Container, Row, Col } from 'react-bootstrap';
import { team1 } from "../data/index";


const TeamPage = () => {
  return (
    <div className='team-page'>
      <div className='team'>
        <Container>
          <Row className='mb-5'>
            <Col>
            <h1 className='text-center fw-bold'>Company Team</h1>
            </Col>
          </Row>
          <Row className='row-cols-lg-4 row-cols-1'>
          {team1.map((data) => {
          return (
            <Col key={data.id} className="mb-5">
              <p className="desc shadow-sm text-align-center">{data.desc}</p>
              <div className="people">
                <img src={data.image} alt="" />
                <div>
                  <h5 className="mb-1">{data.name}</h5>
                  <p className="m-0 fw-bold">{data.jabatan}</p>
                  <p className="m-0 fw-bold">{data.kontak}</p>
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

export default TeamPage;