import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button, Container } from 'react-bootstrap'

const ResultScreen = ({ results }) => {
  return (
    <div>
      <Link to='/'>
        <Button variant='success' style={{ margin: '10px 0' }}>
          GO BACK
        </Button>
      </Link>
      {results.length === 0 ? (
        <h1>No match Found</h1>
      ) : (
        <Container fluid>
          <Row>
            {results.map((element) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem', minHeight: '500px' }}>
                  {!element.poster_path ? (
                    <h3>No Image</h3>
                  ) : (
                    <Card.Img
                      variant='top'
                      src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{element.original_title}</Card.Title>
                    <Card.Text>{element.overview}</Card.Text>
                    <Card.Footer className='text-muted'>
                      Rating - {element.popularity}
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  )
}

export default ResultScreen
