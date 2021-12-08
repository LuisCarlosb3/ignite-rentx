import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repository/implementation/SpecificationRepository";
import { CreateSpecficationService } from "../modules/cars/services/CreateSpecficationService";

const specificationRepository = SpecificationRepository.getInstance();

const specificationsRouter = Router();

specificationsRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const service = new CreateSpecficationService(specificationRepository);
  try {
    service.execute({ name, description });
    return response.status(201).send();
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export { specificationsRouter };
