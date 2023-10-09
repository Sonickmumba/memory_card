import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Score from '../score/Score';

const Game = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetcheData = await fetch("https://dog.ceo/api/breed/hound/images/random/12");
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
  const handleItemClick = (id) => {
    setData((prevItems) =>
    prevItems.map((item) =>
        item.id === id && item.toggle === false ? { ...item, toggle: !item.toggle } : item
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
    <><Score passData={counter} /><div className="cards-div">
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
