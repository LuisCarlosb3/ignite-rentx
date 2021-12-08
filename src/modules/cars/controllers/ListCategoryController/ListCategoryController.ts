import { Request, Response } from "express";

import { ListCategoryService } from "../../services/ListCategoriesService";

class ListCategoryController {
  constructor(private listCategory: ListCategoryService) {}
  handle(request: Request, response: Response): Response {
    const categories = this.listCategory.execute();
    return response.status(200).json(categories);
  }
}
export { ListCategoryController };
