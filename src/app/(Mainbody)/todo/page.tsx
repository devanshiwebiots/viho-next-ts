"use client";

import { Card, CardBody, Col, Container, Row } from "reactstrap";
import TodoList from "../../../Component/To-do/TodoList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import TodoFooter from "../../../Component/To-do/TodoFooter";
import TodoHeader from "../../../Component/To-do/TodoHeader";
import { setAllTodo } from "@/Redux/Slices/TodoReducer";
import Breadcrumbs from "@/CommonComponents/BreadCrumb";

const TodoContainer = () => {
  const dispatch = useDispatch();
  const fetchTodo = async () => {
    try {
      await fetch("/api/ToDoApi")
        .then((res) => res.json())
        .then((resp) => {
          dispatch(setAllTodo(resp));
        });
    } catch (error) {
      console.error("error", error);
    }
  };
  useEffect(() => {
    fetchTodo();
  }, []);
  return (
    <>
      <Breadcrumbs parent="App" title="ToDo" mainTitle="ToDo" />
      <Container fluid={true}>
        <Row>
          <Col xl="12">
            <Card>
              <TodoHeader />
              <CardBody>
                <div className="todo">
                  <div className="todo-list-wrapper">
                    <div className="todo-list-container">
                      <TodoList />
                      <TodoFooter />
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TodoContainer;
