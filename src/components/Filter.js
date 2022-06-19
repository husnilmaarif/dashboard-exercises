import React from "react";

function Filter() {
  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <h4>Role</h4>
          <div className="input-group">
            <select
              className="form-select rounded-pill"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
            >
              <option selected>Roofer</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col">
          <h4>Status</h4>
          <div className="input-group">
            <select
              className="form-select rounded-pill"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
            >
              <option selected>Active</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
