import React from "react";
import Cards from "../components/Cards/Cards";
import Search from "../components/Search/Search";

const Home = ({ result, setsearchTerm }) => {
  console.log(result);
  return (
    <div className="container">
      <Search setsearchTerm={setsearchTerm} />
      <div className="cards-parent row gap-3 justify-content-center">
        {result?.map((x, y) => {
          let { comments, creator, guests, id, location, time, title, type } =
            x;
          return <Cards key={id} {...x} />;
        })}
      </div>
    </div>
  );
};

export default Home;
