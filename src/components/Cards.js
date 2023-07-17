import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import notFound from "../images/notFound.jpg"
function Cards(item) {
  const data = useSelector((state) => state.book.items);

  return (
    <Fragment>
      <Container>
        <Row>
          {data.map((item, i) => {
            return (
              <Col key={i} className="row">
                <Card className="m-1" style={{ width: "18rem" ,backgroundColor:"pink"}}>
                  <Card.Img className=" m-auto  p-2" variant="top" src={item.cover_img} style={{ width: "200px", height:"200px" }}/>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.author} <br />
                      {item.cover_id} <br />
                      {item.edition_count} <br />
                      {item.first_publish_year}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
}

export default Cards;


  /* <div>{item.titleData}</div>   */

// <div>image of book: <img height="100px" width = "100px" src={item.cover_img} alt='notfound'></img></div>
// <div>author section:{item.author}</div>
// <div>cover_id section:{item.cover_id}</div>
// <div>edition_count section:{item.edition_count}</div>
// <div>first_publish_year section:{item.first_publish_year}</div>
// <div>title section:{item.title}</div>
