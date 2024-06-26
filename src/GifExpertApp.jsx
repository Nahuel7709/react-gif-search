import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <div className="navbar">
        <h1>Gif App</h1>
      </div>

      <div className="container">
        <AddCategory onNewCategory={onAddCategory} />

        {categories.map((category) => (
          <div key={category} className="category-container">
            <h2 className="category-title">{category}</h2>
            <GifGrid category={category} />
          </div>
        ))}
      </div>
    </>
  );
}
