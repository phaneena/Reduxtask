import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { count } from './Quizslice';
import { useNavigate } from 'react-router-dom';

const Quizlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [parrotColor, setParrotColor] = useState('');
  const [elephantColor, setElephantColor] = useState('');
  const [biggestAnimal, setBiggestAnimal] = useState('');


  const handleSubmit = () => {

    const isSuccess = parrotColor === 'green' && elephantColor === 'black' && biggestAnimal === 'elephant';
    dispatch(count(isSuccess));
    navigate('/show');
  };

  return (
    <div>
      <p>What is the color of a parrot?</p>
      <input type="radio" id="green" value="green" onClick={() => setParrotColor('green')} />
      <label htmlFor="green">Green</label>
      <input type="radio" id="red" value="red" onClick={() => setParrotColor('red')} />
      <label htmlFor="red">Red</label>
      <input type="radio" id="blue" value="blue" onClick={() => setParrotColor('blue')} />
      <label htmlFor="blue">Blue</label>

      <br />
      <p>What is the color of an elephant?</p>
      <input type="radio" id="green-elephant" value="green" onClick={() => setElephantColor('green')} />
      <label htmlFor="green-elephant">Green</label>
      <input type="radio" id="black-elephant" value="black" onClick={() => setElephantColor('black')} />
      <label htmlFor="black-elephant">Black</label>
      <input type="radio" id="blue-elephant" value="blue" onClick={() => setElephantColor('blue')} />
      <label htmlFor="blue-elephant">Blue</label>

      <br />
      <p>Which is the biggest animal?</p>
      <input type="radio" id="tiger" value="tiger" onClick={() => setBiggestAnimal('tiger')} />
      <label htmlFor="tiger">Tiger</label>
      <input type="radio" id="cat" value="cat" onClick={() => setBiggestAnimal('cat')} />
      <label htmlFor="cat">Cat</label>
      <input type="radio" id="elephant" value="elephant" onClick={() => setBiggestAnimal('elephant')} />
      <label htmlFor="elephant">Elephant</label>

      <br />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Quizlist;
