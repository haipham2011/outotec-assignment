import React, {useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchRequests } from '../../actions';
import Sidebar from './Sidebar';
import RequestsContainer from './RequestsContainer';
import './style.css';

const Requests = () => {
  const dispatch = useDispatch();
  const { requestsGroup, filter, sort, notification } = useSelector(state => state.requests) || [];

  useEffect(() => {
    dispatch(fetchRequests())
  }, [dispatch])

  return (
    <Container className="mw-100">
      <Row>
        <Col sm={2}><Sidebar {...{dispatch, filter}}/></Col>
        <Col sm={10}><RequestsContainer {...{requestsGroup, filter, sort, notification}}/></Col>
      </Row>
    </Container>
  );
};

export default Requests;
