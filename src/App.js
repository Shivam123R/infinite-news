import FetchQuery from "./Components/FetchQuery";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import NewCard from "./Components/NewCard";
function App() {
  const [query, setQuery] = useState("Big News");
  const [dataArray, setDataArray] = useState([]);
  function ChangeQuery(newQuery) {
    setQuery(newQuery);
  }
  function ChangeData(dataArr) {
    setDataArray(dataArr);
  }
  return (
    <div>
      <FetchQuery query={query} ChangeData={ChangeData} />
      <Navbar ChangeQuery={ChangeQuery} />
      <div className="news-cards">
        {dataArray.map((node) => {
          return (
            <NewCard
              key={node.url}
              title={node.title}
              image={node.urlToImage}
              desc={node.description}
              link={node.url}
              author={node.author}
              date={node.publishedAt}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
