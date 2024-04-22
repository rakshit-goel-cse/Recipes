import React, { useState } from 'react';
import './recipe_card.css';
function Recipe( {recipe, index} ) {
    const [tranName, settranName] = useState(false);
    const [transIng, settransIng] = useState(false);
    const [transInst, settransInst] = useState(false);
//console.log("inside recipe- ",recipe["cuisine"]);
  return (
        
        <div key={index} style={{ border: '2px solid black', padding: '10px', margin: '10px' ,color:"white"}}>
        
         <h2> <strong>{index+1+". "}</strong>
            {tranName ? recipe["translatedRecipeName"] : recipe["recipeName"]}
          {recipe["translatedRecipeName"]!=recipe["recipeName"]  &&
           <input type='button' style={{width:'5px'}} value={"#"} onClick={()=>{settranName(!tranName)}} />}
          </h2>

          <p><strong>URL:</strong> <a style={{background:"black"}} href={recipe["url"]}>{recipe["url"]}</a></p>
          <p><strong>Cuisine:</strong> {recipe["cuisine"]}</p>
          <p><strong>Course:</strong> {recipe["course"]}</p>
          <p><strong>Prep Time:</strong> {recipe["prepTimeInMins"]} mins</p>
          <p><strong>Cook Time:</strong> {recipe["cookTimeInMins"]} mins</p>
          <p><strong>Total Time:</strong> {recipe["totalTimeInMins"]} mins</p>
          <p><strong>Servings:</strong> {recipe["servings"]}</p>
          <p><strong>Diet:</strong> {recipe["diet"]}</p>

          <p><strong>{transIng && "Translated"} Ingredients:</strong> 
          {transIng ? recipe["translatedIngredients"] : recipe["ingredients"]}
          <input type='button' style={{width:'5px'}} value={"#"} onClick={()=>{settransIng(!transIng)}} />
          </p>
          
          <p><strong>{transInst && "Translated"} Instructions:</strong> 
          {transInst ? recipe["translatedInstructions"] : recipe["instructions"]}
          <input type='button' style={{width:'5px'}} value={"#"} onClick={()=>{settransInst(!transInst)}} />
          </p>

        </div>
  );
}

export default Recipe;
