// Component
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const JokeCategories = ({ categoryRef }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    const url = 'https://api.chucknorris.io/jokes/categories';

    axios.get(url).then((res) => setCategories([...res.data]));
  };

  return (
    <>
      <label htmlFor='category'>Joke Category:</label>
      {/* <input type='text' name='category' ref={categoryRef} /> */}

      <select name='category' id='category' ref={categoryRef}>
        <option value=''>ALL</option>
        {categories.map((cat, index) => (
          <option value={cat} key={index}>
            {cat}
          </option>
        ))}
      </select>
    </>
  );
};

export default JokeCategories;
