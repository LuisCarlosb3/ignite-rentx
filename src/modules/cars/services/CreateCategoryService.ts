import { ICategoriesRepository } from "../repository/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateCategoryService {
  constructor(private readonly categoriesRepository: ICategoriesRepository) {}
  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error(`Category ${name} already exists`);
    }
    this.categoriesRepository.create({ name, description });
  }
}
export { CreateCategoryService };
