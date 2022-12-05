import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useTodo } from "../hooks/useTodo";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Container,
  Button,
} from "reactstrap";
import Label from "./Label";
import ModalCreateTodo from "./ModalCreateTodo";
import { useFormik } from "formik";
import { PaginatedTodoResponse } from "../utils/types";
import { useCreateTodoMutation } from "../services/todoApi";
import { toast } from "react-toastify";
import SkeletonLoading from "./SkeletonLoading";

const Home: React.FC = () => {
  const [start, setStart] = useState<number>(0);

  const { datas, pageCount, isFetching } = useTodo({ start: start, limit: 10 });

  const handlePageClick = (e: any) => {
    const _start = e.selected * 10;
    setStart(_start);
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [createTodo, { isLoading }] = useCreateTodoMutation();

  const notify = () => toast.success("Success !");

  const initialValues: Partial<PaginatedTodoResponse> = {
    title: "",
    userId: 0,
    completed: false,
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (val) => {
      createTodo(val)
        .unwrap()
        .then(() => notify())
        .then(() => setModal(!modal));
    },
  });

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
          <div className="text-center">
            <Button onClick={toggle} color="primary" disabled={isLoading}>
              Add New Todo
            </Button>
          </div>
          {datas && !isFetching ? (
            datas.map((data, i) => (
              <Col className="d-flex justify-content-center" key={i} md="6">
                <Card
                  className="my-2"
                  style={{
                    width: "22rem",
                    color: "black",
                  }}
                >
                  <CardHeader className="d-flex justify-content-between">
                    User Id : {data.userId}{" "}
                    <Label isCompleted={data.completed} />
                  </CardHeader>
                  <CardBody>
                    <CardTitle tag="h5">{data.title}</CardTitle>
                  </CardBody>
                </Card>
              </Col>
            ))
          ) : (
            <SkeletonLoading count={10} />
          )}
        </Row>
        <ModalCreateTodo
          isLoading={isLoading}
          formik={formik}
          isOpen={modal}
          toggle={toggle}
        />
      </Container>
    </>
  );
};

export default Home;
