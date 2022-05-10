import React, { useRef } from "react";

const Search = ({ setsearchTerm }) => {
  let input = useRef();
  return (
    <>
      <h4 className="text-center mt-3">Search For Drinks</h4>

      <form
        className="d-flex gap-3 justify-content-center my-4"
        onSubmit={(e) => {
          e.preventDefault();
          setsearchTerm(() => input.current.value);
          console.log(input.current.value);
        }}
      >
        <input className="form-control w-50" ref={input} type="text" />
        <button className="btn btn-dark" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
