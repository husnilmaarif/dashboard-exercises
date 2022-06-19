import React from "react";
import Detail from "../components/Detail";
import Filter from "../components/Filter";
import Header from "../components/Header";

function Employee() {
  return (
    <>
      <Header header="Employee Profile" />
      <div className="container">
        <Detail />
        <Filter />
      </div>
    </>
  );
}

export default Employee;
