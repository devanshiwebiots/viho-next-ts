"use client";

import { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import NavClass from "../../../Component/Tasks/NavClass";
import TabClass from "../../../Component/Tasks/TabClass";
import { useDispatch } from "react-redux";
import { setAllTask } from "@/Redux/Slices/TaskReducer";
import Breadcrumbs from "@/CommonComponents/BreadCrumb";

const TasksContainer = () => {
  const dispatch = useDispatch();
  const getTask = async () => {
    try {
      await fetch("/api/TaskApi")
        .then((res) => res.json())
        .then((resp) => {
          dispatch(setAllTask(resp));
        });
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    getTask();
  }, []);
  const [activeTab, setActiveTab] = useState("1");
  const activeToggle = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
      <Breadcrumbs mainTitle="Tasks" parent="Apps" title="Tasks" />
      <Container fluid={true}>
        <div className="email-wrap bookmark-wrap tasks-items">
          <Row>
            <NavClass activeToggle={activeToggle} />
            <TabClass activeTab={activeTab} />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default TasksContainer;
