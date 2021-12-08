import { Category } from "../model/Category";
import { ICategoriesRepository } from "../repository/ICategoriesRepository";

class ListCategoryService {
  constructor(private readonly categoriesRepository: ICategoriesRepository) {}
  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    return categories;
  }
}
export { ListCategoryService };
