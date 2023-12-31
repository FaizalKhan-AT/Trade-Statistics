import React, { useState } from "react";
const Search = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };
  return (
    <form
      onSubmit={handleOnSubmit}
      className="row w-100 justify-content-center"
    >
      <div className="col-md-4">
        <input
          className="form-control bg-dark text-light text-uppercase"
          type="search"
          onChange={handleChange}
          name="searchKey"
          value={formData.searchKey}
          required
          placeholder="Search stock tickers / name"
        />
      </div>
      <div className="col-md-2">
        <input
          onChange={handleChange}
          value={formData.date}
          type="date"
          pattern="\d{4}-\d{2}-\d{2}"
          name="date"
          required
          className="form-control bg-dark text-light "
        />
      </div>
      <div className="col-md-1">
        <button
          type="submit"
          className="btn btn-success d-flex align-items-center justify-content-center"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </form>
  );
};

export default Search;
