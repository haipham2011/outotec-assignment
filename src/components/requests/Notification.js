import React from "react";
import { useDispatch } from "react-redux";
import { setNotification } from "../../actions";
import { Alert, Container, Row } from "react-bootstrap";
import './style.css';

const Notification = ({ notification }) => {
  const dispatch = useDispatch();
  const closeNotification = () => {
    dispatch(setNotification(false));
  };
  if (notification) {
    return (
        <Container className="justify-content-md-center">
          <Row className="justify-content-md-center">
            <Alert variant="success" onClose={closeNotification} dismissible>
              <p>Request created successfully</p>
            </Alert>
          </Row>
        </Container>
    );
  } else {
    return null;
  }
};

export default Notification;
