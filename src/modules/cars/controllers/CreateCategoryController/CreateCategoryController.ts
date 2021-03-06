import { Request, Response } from "express";

import { CreateCategoryService } from "../../services/CreateCategoryService";

class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    try {
      this.createCategoryService.execute({ name, description });
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
export { CreateCategoryController };
