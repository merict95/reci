import React, { useState } from "react";

function RecipeCreate({ addNewRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const isCreateButtonDisabled = name.trim() === "";

  const submitOnClick = (event) => {
    event.preventDefault();

    // Check if name (Recipe Name) is empty before creating the recipe
    if (isCreateButtonDisabled) {
      return;
    }

    // Create a new recipe
    const newRecipe = { name, cuisine, photo, ingredients, preparation };
    addNewRecipe(newRecipe);

    // Clear the form
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Recipe Name"
                required
              />
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <input
                name="photo"
                type="url"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="Photo URL"
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Ingredients"
              />
            </td>
            <td>
              <textarea
                name="preparation"
                value={preparation}
                onChange={(e) => setPreparation(e.target.value)}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button
                type="submit"
                onClick={submitOnClick}
                disabled={isCreateButtonDisabled}
              >
                Create
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
