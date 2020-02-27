import React from "react";
import { Row, Col, Container, Table, Pagination } from "react-bootstrap";
import RequestForm from "./RequestForm";
import "./style.css";
import { maxNumberOfRequests, maxNumberOfPage } from "./config";
import { roundNumber, usePage, sortObjects } from "./functions";
import PageControl from "./PageControl";
import TableHeader from "./TableHeader";
import Notification from "./Notification";

const RequestsContainer = ({ requestsGroup, filter, sort, notification }) => {
  const requestsFiltered = requestsGroup
    .filter(element => {
      if (filter.type !== "any") {
        return element.type === filter.type;
      } else {
        return element;
      }
    })
    .filter(element => {
      if (filter.priority !== "any") {
        return element.priority === filter.priority;
      } else {
        return element;
      }
    })
    .filter(element => {
      if (filter.status !== "any") {
        return element.status === filter.status;
      } else {
        return element;
      }
    })
    .filter(element => {
      return (
        element.id.includes(filter.search) ||
        element.name.includes(filter.search)
      );
    });
  const requestsSorted = sortObjects(requestsFiltered, sort);

  const totalPage = roundNumber(requestsFiltered.length, maxNumberOfRequests);
  const { page, bound, pageBoundCal } = usePage(maxNumberOfPage, totalPage);

  return (
    <Container className="mw-100">
      <Notification {...{ notification }}/>
      <Row>
        <Col sm={9}>
          <h3>Service requests</h3>
        </Col>
        <Col sm={3}>
          <RequestForm />
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <TableHeader
                renderContent="Created"
                name="created"
                sort={sort}
              />
              <TableHeader
                renderContent="Request name"
                name="name"
                sort={sort}
              />
              <th>Request type</th>
              <TableHeader renderContent="ID" name="id" sort={sort} />
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requestsSorted
              .slice(
                maxNumberOfRequests * (page - 1),
                maxNumberOfRequests * page
              )
              .map((element, index) => {
                const {
                  created,
                  name,
                  type,
                  id,
                  description,
                  priority,
                  status
                } = element;
                return (
                  <tr key={index}>
                    <td>{created}</td>
                    <td>{name}</td>
                    <td>{type}</td>
                    <td>{id}</td>
                    <td>{description}</td>
                    <td>{priority}</td>
                    <td>{status}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Row>
      <Row className="justify-content-md-center">
        <Pagination>
          <Pagination.First
            disabled={page === 1}
            onClick={() => {
              pageBoundCal(1);
            }}
          />
          <Pagination.Prev
            disabled={page === 1}
            onClick={() => {
              pageBoundCal(page - 1);
            }}
          />
          <PageControl {...{ page, bound, pageBoundCal }} />
          <Pagination.Next
            disabled={page === totalPage}
            onClick={() => {
              pageBoundCal(page + 1);
            }}
          />
          <Pagination.Last
            disabled={page === totalPage}
            onClick={() => {
              pageBoundCal(totalPage);
            }}
          />
        </Pagination>
      </Row>
    </Container>
  );
};

export default RequestsContainer;
