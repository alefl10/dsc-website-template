import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

export default ({ register }) => (
  <section id="faqs" className="section-spacer section-faq">
    <Container>
      <header className="section-header text-center">
        <h2 className="section-title">Frequently Asked Questions</h2>
      </header>
      <Row className="row">
        <Col sm={6}>
          <Card body>
            <h5 className="card-title">Who can become a member?</h5>
            <p>
              The clubs is open to any student, ranging from novice developers
              who are just starting, to advanced developers who want to further
              their skills.
            </p>
          </Card>
        </Col>
        <Col sm={6}>
          <Card body>
            <h5 className="card-title">
              How frequently do events and workshops occur?
            </h5>
            <p>
              We intend to host online events and workshops at least once a month. Become a {' '}
              <a href={register} target="_blank" rel="noopener noreferrer">
                member
              </a>{' '}
              to get updates.
            </p>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Card body>
            <h5 className="card-title">
              Will events be hosted in presence this year?
            </h5>
            <p>
              Due to the COVID-19 pandemic, we will NOT host any events in person until further notice.\n
							However, Google Developers has provided us with exceptional tools and guidelines to successfully carry out
							all events online.
            </p>
          </Card>
        </Col>
        <Col sm={6}>
          <Card body>
            <h5 className="card-title">
              Who should I reach out to if I have any questions?
            </h5>
            <p>
              If you have any questions or comments, please don't hesitate to
              contact us. You can find an email at the end of the page. We would be happy to stay
              engaged via email even after the event.
            </p>
          </Card>
        </Col>
      </Row>
      { /*<div className="mt-40 text-center">
        <a href="" className="hero-button">
          Send us an email
        </a>
      </div> */}
    </Container>
  </section>
)
