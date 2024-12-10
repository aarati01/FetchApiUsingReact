import { useEffect, useState } from "react";

const App = () => {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    console.log(data);
    setCards(data);  // Update the state with fetched data
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        {cards.map((card) => {
          return (
            <div key={card.id} className="card">
              <h1>{card.title}</h1>
              <p>{card.body}</p>
              <span>By: UserId: {card.userId}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
