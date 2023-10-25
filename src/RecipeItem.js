import React from "react";

function RecipeItem({recipe, deleteRecipe}) {
  return (
    <tr>
    <td>{recipe.name}</td>
    <td>{recipe.cuisine}</td>
    <td><img src={recipe.photo}></img></td>
    <td>{recipe.ingredients}</td>
    <td>{recipe.preparation}</td>
    <td><button name="delete" onClick={deleteRecipe} >Delete</button></td>
    </tr>
  );
}

export default RecipeItem;
