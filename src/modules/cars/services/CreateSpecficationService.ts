import { ISpecificationRepository } from "../repository/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecficationService {
  constructor(private specificationRepository: ISpecificationRepository) {}
  execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error(`Specification ${name} already exists`);
    }
    this.specificationRepository.create({ name, description });
  }
}
export { CreateSpecficationService };
