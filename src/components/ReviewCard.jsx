import { Card, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const ReviewCards = ({ reviews }) => {
    console.log(reviews, 'reviews');
    return (
        <Row xs={1} md={4} className="g-4">
          {reviews.map((review) => {
            return (
              <Col>
                <Card className='Cards'>
                  <Card.Body>
                  <Link to={`/reviews/${review.review_id}`}>  <img id='review-images' src={review.review_img_url}/></Link>
                    <Card.Title><p><b>Name: </b>{review.title}</p></Card.Title>
                    <Card.Text>
                      <p><b>Game ID: </b>{review.review_id}</p>
                      <p><b>Category: </b>{review.category}</p>
                      <p><b>Designer: </b>{review.designer}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      );
}

export default ReviewCards;