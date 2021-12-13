import { Request, Response } from "express";

import { CreateSpecficationService } from "../../services/CreateSpecficationService";

class CreateSpecificationController {
  constructor(private createSpecificationService: CreateSpecficationService) {}
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;
    try {
      this.createSpecificationService.execute({ name, description });
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateSpecificationController };
