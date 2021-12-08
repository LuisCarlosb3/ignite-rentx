import { Router } from "express";

import { createCategoryController } from "../modules/cars/controllers/CreateCategoryController";
import { listCategoriesController } from "../modules/cars/controllers/ListCategoryController";

const categoriesRouter = Router();

categoriesRouter.post("/", createCategoryController.handle);

categoriesRouter.get("/", listCategoriesController.handle);

export { categoriesRouter };
