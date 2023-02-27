import React, { useEffect } from "react";

function FetchQuery(props) {
  const query = props.query;

  useEffect(() => {
    FetchApi();
  }, [query]);

  async function FetchApi() {
    const apiKey = "c4ccee5f0f39402eb91265a1ce1d9e79";
    const fetchData = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&from=2022-12-10&to=${new Date().toLocaleDateString()}&sortBy=publishedAt&apiKey=${apiKey}`
    );
    const jsonData = await fetchData.json();

    return new Promise((resolve, reject) => {
      if (jsonData.status === "ok") {
        resolve(props.ChangeData(jsonData.articles));
      } else {
        reject(alert(`Error : ${jsonData.message}`));
      }
    });
  }

  return <></>;
}

export default FetchQuery;
