import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ListUsers.css";

function ListUsers() {
  const route = [
    { page: "Worklists", link: "/" },
    { page: "Quotation", link: "/" },
    { page: "Inspection", link: "/" },
    { page: "Warrantles", link: "/" },
    { page: "Documents", link: "/" },
    { page: "Permission", link: "/" },
  ];
  return (
    <>
      <Navbar bg="white" variant="white" className="mt-5 rounded-4">
        <Container className="justify-content-start">
          {route.map((route, index) => {
            return (
              <Link
                to={route.link}
                className="text-muted px-4 link-users"
                key={index}
              >
                {route.page}
              </Link>
            );
          })}
        </Container>
      </Navbar>
    </>
  );
}

export default ListUsers;
