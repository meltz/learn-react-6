// https://www.youtube.com/watch?v=nshyjApIovo
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import JokeCategories from './components/JokeCategories';
// import useJokeCategories from './useJokeCategories';

const App = () => {
  // const { categoryRef, CategoriesDropdown } = useJokeCategories();
  const categoryRef = useRef(null);

  const [joke, setJoke] = useState('');

  useEffect(() => {
    randomJoke();
  }, []);

  const randomJoke = (category = '') => {
    const url = 'https://api.chucknorris.io/jokes/random';
    const api = !!!category ? url : `${url}?category=${category}`;

    axios.get(api).then((res) => setJoke(res.data.value));
  };

  const generateJoke = (e) => {
    e.preventDefault();

    randomJoke(categoryRef.current.value);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='joke-section' align='center'>
            <form onSubmit={(e) => generateJoke(e)}>
              <h1>Chuck Noris Joke</h1>
              <h3>{joke}</h3>
              <br />
              {/* <CategoriesDropdown /> */}
              <JokeCategories categoryRef={categoryRef} />
              <br />
              <br />
              <button>Generate New Joke</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
