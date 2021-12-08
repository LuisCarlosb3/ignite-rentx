import { CategoriesRepository } from "../../repository/implementation/CategoriesRepository";
import { ListCategoryService } from "../../services/ListCategoriesService";
import { ListCategoryController } from "./ListCategoryController";

const listCategoryRepository = CategoriesRepository.getInstance();
const createCategoryService = new ListCategoryService(listCategoryRepository);
const listCategoriesController = new ListCategoryController(
  createCategoryService
);
export { listCategoriesController };
