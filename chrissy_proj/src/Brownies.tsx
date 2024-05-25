import React, { useState } from "react";
import recipes from "./recipes.json";
import Recipe from "./Recipe";

function Brownies() {
  const browniesRecipes = recipes.filter((recipe) => recipe.type === "brownie");
  const [view, setView] = useState("");

  const display = (event) => {
    setView(event.target.name);
  }

  const goBack = (event) => {
    setView("");
  }

  return (
    <div>
      {/* <header className="bg-pink-300 py-4 px-3 flex justify-between items-center">
        <div
          className="text-white text-5xl font-pacifico"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Epic Baking Website
        </div>
      </header> */}
      <main className="flex flex-col items-center mt-10">
        <h1
          className="text-5xl font-bold mb-10 text-pink-300 font-pacifico"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Brownies
        </h1>
        <div className="flex flex-wrap justify-center gap-8 px-4 lg:px-0">
          {browniesRecipes.map((recipe) => (
            <div>
            {view==="" &&
            <div
              key={recipe.id}
              className="flex flex-col items-center bg-pink-300 border-2 border-pink-300 bg-white p-4 rounded-md shadow-lg"
              style={{ minWidth: "300px", margin: "10px" }}
            >
                <img
                  name={recipe.id}
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-48 h-48 object-cover rounded-md transition-transform transform hover:scale-105"
                  onClick={display}
                />
                <p className="mt-2 text-lg font-medium text-gray-700">
                  {recipe.name}
                </p>
            </div>
            }
            {view===recipe.id.toString() &&
            <Recipe recipe={recipe} goBack={goBack} />
            }
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Brownies;
