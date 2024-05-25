//import { color } from '@mui/system';
//import { right } from '@popperjs/core';
import React from 'react';
//import auth from './firebase'

const Recipe = ({ recipe, goBack }) => {
  //const onSave = (event) => {updateProfile(auth.currentUser, {saved_recipe: recipe}) }

  const onSave = (event) => {alert('saving')}
  return (
    <div className="p-4 relative">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={goBack}>
        Back
      </button>
      <h1 className="text-3xl font-bold">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="w-full h-auto mt-4 mb-4" />
      <h2 className="text-2xl font-semibold">Ingredients</h2>
      <ul className="list-disc ml-8 mt-2 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold">Instructions</h2>
      <ol className="list-decimal ml-8 mt-2">
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
