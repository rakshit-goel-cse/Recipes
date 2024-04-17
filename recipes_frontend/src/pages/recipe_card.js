import React from 'react';

function recipe( recipes ) {
  return (
    <div style={{height:'60%',overflow:"auto"}}>
        {console.log("inside cards- "+recipes)}
      {recipes.map((recipe, index) => (
        <div key={index} style={{ border: '2px solid black', padding: '10px', margin: '10px' }}>
          <h2>{recipe.translatedRecipeName}</h2>
          <p><strong>URL:</strong> <a href={recipe.url}>{recipe.url}</a></p>
          <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
          <p><strong>Course:</strong> {recipe.course}</p>
          <p><strong>Prep Time:</strong> {recipe.prepTimeInMins} mins</p>
          <p><strong>Cook Time:</strong> {recipe.cookTimeInMins} mins</p>
          <p><strong>Total Time:</strong> {recipe.totalTimeInMins} mins</p>
          <p><strong>Servings:</strong> {recipe.servings}</p>
          <p><strong>Diet:</strong> {recipe.diet}</p>
          <p><strong>Translated Ingredients:</strong> {recipe.translatedIngredients}</p>
          <p><strong>Translated Instructions:</strong> {recipe.translatedInstructions}</p>
        </div>
      ))}
    </div>
  );
}

export default recipe;
