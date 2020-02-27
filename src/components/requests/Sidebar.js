import React from "react";
import { Card, Form, FormControl } from "react-bootstrap";
import { setFilter } from '../../actions';

const Sidebar = ({ dispatch, filter }) => {
  const handleChange = e => {
    const newFilter = {
      ...filter,
      [e.target.name]: e.target.value
    }
    dispatch(setFilter(newFilter))
  };

  return (
    <Card>
      <Card.Header as="h5">Filter</Card.Header>
      <Card.Body>
        <Card.Title>Search</Card.Title>
        <Form>
          <FormControl type="text" name="search" placeholder="Search" className="mr-sm-2" onChange={handleChange}/>
        </Form>
        <Card.Title>Request types</Card.Title>
        <Form>
          <Form.Group controlId="types">
            <Form.Control as="select" onChange={handleChange} name="type">
              <option value="any">Any</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Card.Title>Priority</Card.Title>
        <Form>
          <Form.Group controlId="priority">
            <Form.Control as="select" onChange={handleChange} name="priority">
              <option value="any">Any</option>
              <option value="audit">Audit</option>
              <option value="maintenance">Maintenance</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Card.Title>Status</Card.Title>
        <Form>
          <Form.Group controlId="status">
            <Form.Control as="select" onChange={handleChange} name="status">
              <option value="any">Any</option>
              <option value="open">Open</option>
              <option value="close">Close</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Sidebar;
