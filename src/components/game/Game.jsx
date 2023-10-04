import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Game = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetcheData = await fetch("https://dog.ceo/api/breed/hound/images/random/2");
        const response = await fetcheData.json();
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
  //   console.log(e.target);
  //   setData([...data.sort(() => Math.random() - 0.5)]);
  // }

  const handleItemClick = (id) => {
    // setData((prevItems) =>
    // prevItems.map((item) =>
    //     item.id === id ? { ...item, toggle: !item.toggle } : item
    //   )
    // );

    setData((prevItems) =>
    prevItems.map((item) =>
        item.id === id && item.toggle != true? { ...item, toggle: !item.toggle } : item
      )
    );

    setData((prevItems) => {
      const incrementedCounter = prevItems.reduce(
        (count, item) => (item.toggle ? count + 1 : count),
        0
      );
      setCounter(incrementedCounter);
      return prevItems;
    });

    setData((prevItems) => [...prevItems.sort(() => Math.random() - 0.5)]);
  };
  console.log(data);
  return (
    <div className="cards-div">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <p>Counter: {counter}</p>
      { data.map((pic) => (
        <div className="image-div" key={pic.id} onClick={() => handleItemClick(pic.id)}>
          <img src={pic.url} alt="Dog pic" />
        </div>
      ))}
    </div>
  )
};

export default Game
