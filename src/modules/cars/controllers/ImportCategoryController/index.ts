import { CategoriesRepository } from "../../repository/implementation/CategoriesRepository";
import { ImportCategoryService } from "../../services/ImportCategoryService";
import { ImportCategoryController } from "./ImportCategoryController";

const listCategoryRepository = CategoriesRepository.getInstance();
const importCategoriesService = new ImportCategoryService(
  listCategoryRepository
);
const importCategoryController = new ImportCategoryController(
  importCategoriesService
);
export { importCategoryController };
