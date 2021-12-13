import { SpecificationRepository } from "../../repository/implementation/SpecificationRepository";
import { CreateSpecficationService } from "../../services/CreateSpecficationService";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationRepository = SpecificationRepository.getInstance();

const createSpecificationService = new CreateSpecficationService(
  specificationRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationService
);

export { createSpecificationController };
