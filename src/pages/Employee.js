import React from "react";
import Detail from "../components/Detail";
import Filter from "../components/Filter";
import Header from "../components/Header";
import ListUsers from "../components/ListUsers";

function Employee() {
  return (
    <>
      <Header header="Employee Profile" />
      <div className="container">
        <Detail />
        <Filter />
        <ListUsers />
      </div>
    </>
  );
}

export default Employee;
