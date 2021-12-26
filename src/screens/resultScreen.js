import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'
import Result from '../components/result'

const ResultScreen = ({ results }) => {
  return (
    <div>
      <Link to='/'>
        <Button
          variant='success'
          style={{ margin: '18px 0', width: '100%', textAlign: 'center' }}
        >
          GO BACK
        </Button>
      </Link>
      {results.length === 0 ? (
        <h1>No match Found</h1>
      ) : (
        <Row>
          {results.map((element) => (
            <Col sm={12} md={4} xl={3}>
              <Result key={element} element={element} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default ResultScreen
