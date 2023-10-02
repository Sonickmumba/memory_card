import React, { useEffect, useState } from 'react'

const Game = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const fetcheData = await fetch("https://dog.ceo/api/breed/hound/images/random/2");
        const response = await fetcheData.json();
        setData(response.message);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [])
  return (
    <div className="card">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      { data.map((pic) => (
        <div className="image-div">
          <img src={`${pic}`} alt="Dog pic" />
        </div>
      ))}
      <p>sonck</p>
    </div>
  )
};

export default Game
