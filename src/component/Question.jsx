import Container from "react-bootstrap/Container";
// import { Button } from 'bootstrap';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { arrowdown } from "../helper/icons";
import { useState } from "react";
import { arrowup } from "../helper/icons";


const Question = ({ id, answer, question }) => {
  const [showImage, setShowImage] = useState(true);
  return (
    <Container className="container">
      {showImage ? (
        <div className="shadow p-3 mb-5 bg-white rounded d-flex justify-content-between ">
           {id} . {question}
          <span onClick={() => setShowImage(!showImage)}>{arrowdown}</span>
        </div>
      ) : (
        
        <Row className="shadow p-3 mb-5 bg-white rounded d-flex justify-content-between ">
         {id} . {question} 
         <div className="shadow p-3 mb-5 bg-white rounded d-flex justify-content-between  mt-3">{answer}
          <span onClick={() => setShowImage(!showImage)} justify-content-flex-end >{arrowup}</span>
        </div>
        </Row>
          
      )}
    </Container>
  );
};

export default Question;
