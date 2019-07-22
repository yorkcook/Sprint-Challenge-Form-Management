import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";

export const ProtectedData = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/restricted/data")
      .then(res => {
        setRecipe(res.data);
      })
      .catch(err => {
        console.log("Danger, Danger!", err);
      });
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      {recipe.map(recipe => (
        <div>
          <h2>{recipe.name}</h2>
        </div>
      ))}
    </div>
  );
};

// export default ProtectedData;
