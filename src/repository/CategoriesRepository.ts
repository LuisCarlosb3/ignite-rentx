import { Category } from "../model/Category";

interface ICreateCategory {
  name: string;
  description: string;
}
export class CategoriesRepository {
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
  create({ name, description }: ICreateCategory): void {
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
