import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Score from '../score/Score';

const Game = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetch("https://dog.ceo/api/breed/hound/images/random/4");
        const response = await fetchedData.json();
        const collData = response.message.map((url) => ({
          id: uuidv4(),
          url,
          toggle: false,
        }));
        setData(collData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [])

  // const handleItemClick = (id) => {
  //   setData((prevItems) =>
  //   prevItems.map((item) => 
  //       item.id === id && item.toggle === false ? { ...item, toggle: true } : item, setCounter(0)
  //     )
  //   );
  //   setData((prevItems) => {
  //     const incrementedCounter = prevItems.reduce(
  //       (count, item) => (item.toggle ? count + 1 : count),
  //       0
  //     );
  //     setCounter(incrementedCounter);
  //     return prevItems;
  //   });
  //   setData((prevItems) => [...prevItems.sort(() => Math.random() - 0.5)]);
  // };

  const handleItemClick = (id) => {
    setData((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, toggle: !item.toggle } : item
      );
  
      const clickedItem = updatedItems.find((item) => item.id === id);
      const incrementedCounter = updatedItems.reduce(
        (count, item) => (item.toggle ? count + 1 : count),
        0
      );
  
      if (clickedItem.toggle) {
        // Reset the counter to 0 if the clicked image has toggle true
        setCounter(0);
      } else {
        // Update the best score if the current score is greater
        if (incrementedCounter > bestScore) {
          setBestScore(incrementedCounter);
        }
        // Increment the counter
        setCounter(incrementedCounter);
      }
  
      // Shuffle the order of items
      const shuffledItems = [...updatedItems.sort(() => Math.random() - 0.5)];
  
      return shuffledItems;
    });
  };
  return (
    <><Score passData={counter} bestScore={bestScore} /><div className="cards-div">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data.map((pic) => (
        <div className="image-div" key={pic.id} onClick={() => handleItemClick(pic.id)}>
          <img src={pic.url} alt="Dog pic" />
        </div>
      ))}
    </div></>
  )
};

export default Game
