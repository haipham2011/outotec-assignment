import React, { useState } from "react";
import { Button, Form, Card, Col, Row } from "react-bootstrap";
import { addRequest, setNotification } from "../../actions";
import { useDispatch } from "react-redux";

const RequestForm = () => {
  const dispatch = useDispatch();
  const [create, setCreate] = useState(false);
  const [form, setForm] = useState({
    name: "",
    type: "any",
    id: "",
    description: "",
    priority: "any",
    status: "open"
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const createRequest = () => {
    const today = new Date();
    const time = `${today.getDate()}.${today.getMonth() +
      1}.${today.getFullYear()} ${("0" + today.getHours()).slice(-2)}:${(
      "0" + today.getMinutes()
    ).slice(-2)}`;

    if (form.name !== "" && form.priority !== "any" && form.type !== "any") {
      addRequest({
        ...form,
        created: time
      });
      setCreate(false);
      dispatch(setNotification(true));
    }
  };

  const renderRequired = field => {
    if (form[field] === "any" || form[field] === "") {
      return (
        <Col className="required">
          <Form.Label>Required</Form.Label>
        </Col>
      );
    } else {
      return null;
    }
  };

  if (create) {
    return (
      <div className="create-request">
        <Card>
          <Card.Body>
            <Card.Title>Create new service request</Card.Title>
            <Form>
              <Form.Group controlId="name">
                <Row>
                  <Col>
                    <Form.Label>Request name</Form.Label>
                  </Col>
                  {renderRequired("name")}
                </Row>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  onChange={handleChange}
                  required={true}
                />
              </Form.Group>

              <Form.Group controlId="types">
                <Row>
                  <Col>
                    <Form.Label>Request type</Form.Label>
                  </Col>
                  {renderRequired("type")}
                </Row>
                <Form.Control as="select" onChange={handleChange} name="type">
                  <option className="text-muted">Any</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="id">
                <Row>
                  <Col>
                    <Form.Label>ID</Form.Label>
                  </Col>
                  {renderRequired("id")}
                </Row>
                <Form.Control
                  name="id"
                  type="text"
                  placeholder="Enter ID"
                  onChange={handleChange}
                  required={true}
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="description"
                  type="text"
                  placeholder="Enter ID"
                  as="textarea"
                  rows="3"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="priority">
                <Row>
                  <Col>
                    <Form.Label>Priority</Form.Label>
                  </Col>
                  {renderRequired("priority")}
                </Row>
                <Form.Control
                  as="select"
                  onChange={handleChange}
                  name="priority"
                >
                  <option className="text-muted">Select</option>
                  <option value="audit">Audit</option>
                  <option value="maintenance">Maintenance</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" onClick={createRequest}>
                Send
              </Button>
              <Button
                variant="light"
                onClick={() => {
                  setCreate(false);
                }}
              >
                Cancel
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    return (
      <Button
        className="create-request"
        variant="primary"
        onClick={() => {
          setCreate(true);
        }}
      >
        New request
      </Button>
    );
  }
};

export default RequestForm;
