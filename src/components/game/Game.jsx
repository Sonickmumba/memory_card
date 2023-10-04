import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Game = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetcheData = await fetch("https://dog.ceo/api/breed/hound/images/random/10");
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
  
  // const handleCardClick = () => {
  //   setData([...data.sort(() => Math.random() - 0.5)]);
  // }
  return (
    <div className="card" onClick={handleCardClick}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      { data.map((pic) => (
        <div className="image-div" key={pic.id}>
          <img src={pic.url} alt="Dog pic" />
        </div>
      ))}
    </div>
  )
};

export default Game
