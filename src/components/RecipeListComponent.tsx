import React, { useEffect, useState } from "react";
import axios from "axios";
import { Recipe } from "../models/Recipe";

const RecipeListComponent: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch recipes from API
  const fetchRecipes = async () => {
    try {
      const response = await axios.get<Recipe[]>(
        "https://localhost:44320/api/Recipe"
      );
      setRecipes(response.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching recipes");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []); // Empty dependency array to run the effect only once after the initial render

  return (
    <div>
      <h1>Recipe List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          {recipes.map((recipe) => (
            <div key={recipe.recipeId}>
              <h2>{recipe.recipeName}</h2>
              <p>{recipe.directions}</p>
              {/* Render other details as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeListComponent;
