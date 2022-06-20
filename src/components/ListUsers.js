import "./ListUsers.css";
import React, { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../redux/features/userSlice";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReactPaginate from "react-paginate";

function ListUsers() {
  const [pageNumber, setPageNumber] = useState(0);
  const { users, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const route = [
    { page: "Worklists", link: "/" },
    { page: "Quotation", link: "/" },
    { page: "Inspection", link: "/" },
    { page: "Warrantles", link: "/" },
    { page: "Documents", link: "/" },
    { page: "Permission", link: "/" },
  ];

  if (loading) {
    <h1 className="my-5 text-center">Loading</h1>;
  }

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  // looping list user
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, index) => {
      return (
        <tr className="bg-white text-center border-bottom" key={index}>
          <td>{index + 1}.</td>
          <td>
            {user.name.title}. {user.name.first} {user.name.last}
          </td>
          <td>{user.gender}</td>
          <td>16 Jun 2022</td>
          <td>20 Jun 2022</td>
          <td>
            <span className="rounded-pill done py-1 px-3">Done</span>
          </td>
          <td className="opsi p-3">
            <MoreHorizIcon />
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="row">
        <Navbar bg="white" variant="white" className="mt-5 rounded-4">
          <Container className="justify-content-start">
            {route.map((route, index) => {
              return (
                <Link
                  to={route.link}
                  className="text-muted px-3 link-users"
                  key={index}
                >
                  {route.page}
                </Link>
              );
            })}
          </Container>
        </Navbar>
      </div>

      <div className="row mb-4">
        <table className="mt-3">
          <thead>
            <tr className="text-center mb-3">
              <td className="fw-bold fs-5">Number</td>
              <td className="fw-bold fs-5">Customer</td>
              <td className="fw-bold fs-5">Gender</td>
              <td className="fw-bold fs-5">Start Date</td>
              <td className="fw-bold fs-5">End Date</td>
              <td className="fw-bold fs-5">Status</td>
            </tr>
          </thead>
          <tbody>{displayUsers}</tbody>
        </table>
      </div>

      {/* pagination */}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
}

export default ListUsers;
