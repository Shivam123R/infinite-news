import React, { useEffect } from "react";

function SearchButton(props) {
  useEffect(() => {
    const getButtons = document.getElementsByClassName("search-btn");
    getButtons[0].classList.add("visited");
    props.changeQuery(getButtons[0].innerText);
  }, []);

  const handleOnClick = (event) => {
    const targetValue = event.target.innerText;
    const targetClassList = event.target.classList;
    const getButtons = document.getElementsByClassName("search-btn");
    if (targetClassList.contains("visited")) {
      targetClassList.remove("visited");
      props.changeQuery("Big News");
    } else {
      for (let i of getButtons) {
        if (targetValue === i.innerText) {
          targetClassList.add("visited");
          props.changeQuery(targetValue);
        } else {
          i.classList.remove("visited");
        }
      }
    }
  };

  return (
    <button className="search-btn" id={props.name} onClick={handleOnClick}>
      {props.name}
    </button>
  );
}

export default SearchButton;
