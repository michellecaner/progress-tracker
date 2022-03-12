import React, { useState, useEffect } from 'react';
import { CategoryCard } from './CategoryCard';
import { getAllCategories, getCategoryById } from '../../modules/CategoryManager';

export const CategoryList = () => {

  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    return getAllCategories().then(categoriesFromAPI => {
      setCategories(categoriesFromAPI)
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container-cards">
      {categories.map(category => <CategoryCard key={category.id} category={category} />)}
    </div>
  );
};