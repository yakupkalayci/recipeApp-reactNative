export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface CategoriesResponse {
  categories: Category[];
}

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface MealsResponse {
  meals: Meal[];
}