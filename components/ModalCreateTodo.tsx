import React from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Spinner,
} from "reactstrap";
import { PaginatedTodoResponse } from "../utils/types";
import { FormikProps } from "formik";

type Props = {
  isOpen: boolean;
  toggle: () => void;
  formik: FormikProps<Partial<PaginatedTodoResponse>>;
  isLoading: boolean;
};

const ModalCreateTodo: React.FC<Props> = (props) => {
  const { isOpen, toggle, formik, isLoading } = props;

  return (
    <Modal style={{ color: "black" }} isOpen={isOpen} toggle={toggle}>
      <ModalHeader>Create Todo</ModalHeader>
      <ModalBody>
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup row>
            <Label for="userId" sm={2}>
              User Id
            </Label>
            <Col sm={10}>
              <Input
                id="userId"
                name="userId"
                placeholder="userId"
                type="number"
                onChange={formik.handleChange}
                values={formik.values.userId}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="title" sm={2}>
              Title
            </Label>
            <Col sm={10}>
              <Input
                id="title"
                name="title"
                placeholder="title"
                type="text"
                onChange={formik.handleChange}
                values={formik.values.title}
              />
            </Col>
          </FormGroup>
          <Col
            sm={{
              size: 10,
            }}
          >
            <FormGroup check>
              <Input
                name="completed"
                values={formik.values.completed}
                onChange={formik.handleChange}
                type="checkbox"
              />{" "}
              <Label check>Completed</Label>
            </FormGroup>
          </Col>
          <div className="text-end">
            <Button color="primary" type="submit" disabled={isLoading}>
              {isLoading ? (
                <Spinner size="sm" color="secondary">Loading...</Spinner>
              ) : (
                <>Apply</>
              )}
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ModalCreateTodo;
