import React from 'react';
import './index.css';

const Form = () => {

  return (
    <form >
      <h2>Ecrivez-nous</h2>
      <label htmlFor="name">Nom:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Mail:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" rows="4" required />

      <button type="submit">Envoyez</button>
    </form>
  );
};

export default Form;
