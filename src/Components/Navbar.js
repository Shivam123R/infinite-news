import React, { useRef } from "react";
import SearchButton from "./SearchButton";

function Navbar(props) {
  const inputSearchValue = useRef(null);

  function handleRightScroll(event) {
    document.getElementById("tags").scrollBy(-200, 0);
  }
  const handleLeftScroll = () => {
    document.getElementById("tags").scrollBy(200, 0);
  };
  function QueryChanger(query) {
    props.ChangeQuery(query);
  }
  function handleSubmit(event) {
    event.preventDefault();
    QueryChanger(inputSearchValue.current.value);
    event.target.reset();
  }
  const searchBarOptions = [
    "Big News",
    "Trending",
    "Technology",
    "Gaming",
    "Mobiles",
    "Archaeology",
    "Nature",
    "Movie",
    "Music",
    "Politics",
    "Nations",
    "Sports",
    "Cricket",
    "FootBall",
    "Fifa",
  ];
  return (
    <div className="navbar">
      <div className="nav-title">
        <img
          src="https://www.seekpng.com/png/full/437-4374997_infinity-red-web-design-favicon-infinity.png"
          alt="title.png"
        />
        Infinite News
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="newsSearch"
            id="newsSearch"
            ref={inputSearchValue}
            autoComplete="off"
          />
          <button type="submit">Submit</button>
        </form>
        <div className="search-tags" id="search-tags">
          <span
            style={{ fontSize: "3rem" }}
            onClick={handleRightScroll}
            className="left-scroll-btn"
          >
            &#60;
          </span>
          <div className="tags" id="tags">
            {searchBarOptions.map((each) => {
              return <SearchButton name={each} changeQuery={QueryChanger} />;
            })}
          </div>
          <span
            style={{ fontSize: "3rem" }}
            onClick={handleLeftScroll}
            className="right-scroll-btn"
          >
            &#62;
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
