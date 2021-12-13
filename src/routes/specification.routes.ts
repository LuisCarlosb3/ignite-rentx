import { Router } from "express";

import { createSpecificationController } from "../modules/cars/controllers/CreateSpecificationController";

const specificationsRouter = Router();

specificationsRouter.post("/", createSpecificationController.handle);

export { specificationsRouter };
