import { Request, Response } from "express";

import { ImportCategoryService } from "../../services/ImportCategoryService";

class ImportCategoryController {
  constructor(private importCategoriesService: ImportCategoryService) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    try {
      await this.importCategoriesService.execute(file);
      return response.status(201).send();
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: error.message });
    }
  }
}

export { ImportCategoryController };
