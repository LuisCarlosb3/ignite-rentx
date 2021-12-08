import { CategoriesRepository } from "../../repository/implementation/CategoriesRepository";
import { CreateCategoryService } from "../../services/CreateCategoryService";
import { CreateCategoryController } from "./CreateCategoryController";

const createCategoryRepository = CategoriesRepository.getInstance();
const createCategoryService = new CreateCategoryService(
  createCategoryRepository
);
const createCategoryController = new CreateCategoryController(
  createCategoryService
);
export { createCategoryController };
