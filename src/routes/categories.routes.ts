import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/controllers/CreateCategoryController";
import { importCategoryController } from "../modules/cars/controllers/ImportCategoryController";
import { listCategoriesController } from "../modules/cars/controllers/ListCategoryController";

const categoriesRouter = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRouter.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRouter.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRouter.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRouter };
