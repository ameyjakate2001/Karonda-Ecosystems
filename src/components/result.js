import React from 'react'
import { Card } from 'react-bootstrap'

const Result = ({ element }) => {
  return (
    <Card style={{ minHeight: '500px', margin: '0 5px' }}>
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
  )
}

export default Result
