import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useTodo } from "../hooks/useTodo";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  Container,
} from "reactstrap";
import Label from "./Label";

const Home: React.FC = () => {
  const [start, setStart] = useState<number>(0);

  const { datas, pageCount } = useTodo({ start: start, limit: 10 });

  const handlePageClick = (e: any) => {
    const _start = e.selected * 10;
    setStart(_start);
  };
  return (
    <>
      <h1 className="text-center">To-do List !</h1>
      <Container>
        <ReactPaginate
          onPageChange={handlePageClick}
          previousLabel={"prev"}
          nextLabel={"next"}
          pageCount={pageCount}
          pageRangeDisplayed={3}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
        <Row className="px-5 mx-5">
          {datas &&
            datas.map((data, i) => (
              <Col className="d-flex justify-content-center" key={i} md="6">
                <Card
                  className="my-2"
                  style={{
                    width: "22rem",
                    color: "black",
                  }}
                >
                  <CardHeader className="d-flex justify-content-between">User Id : {data.userId} <Label isCompleted={data.completed} /></CardHeader>
                  <CardBody>
                    <CardTitle tag="h5">{data.title}</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
