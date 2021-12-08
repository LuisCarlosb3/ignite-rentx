import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];
  private static instance;
  constructor() {
    this.categories = [];
  }
  static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.instance) {
      CategoriesRepository.instance = new CategoriesRepository();
    }
    return CategoriesRepository.instance;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    const newCategory: Category = new Category();

    Object.assign(newCategory, {
      name,
      description,
      created: new Date(),
    });
    this.categories.push(newCategory);
  }
  list(): Category[] {
    return this.categories;
  }
  findByName(name: string): Category {
    const category: Category = this.categories.find(
      (category) => category.name === name
    );
    return category;
  }
}
