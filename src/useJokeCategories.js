// Custom hook, can return component, function and data
// Custom hook must start with useXXX
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const useJokeCategories = () => {
  const categoryRef = useRef(null);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    const url = 'https://api.chucknorris.io/jokes/categories';

    axios.get(url).then((res) => setCategories([...res.data]));
  };

  const CategoriesDropdown = () => {
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

  return { categoryRef, CategoriesDropdown };
};

export default useJokeCategories;
