import { Router } from "express";

import { CategoriesRepository } from "../repository/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRepository = CategoriesRepository.getInstance();
const categoriesRouter = Router();

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const service = new CreateCategoryService(categoriesRepository);
  try {
    service.execute({ name, description });
    return response.status(201).send();
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

categoriesRouter.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.status(200).json(all);
});

export { categoriesRouter };
