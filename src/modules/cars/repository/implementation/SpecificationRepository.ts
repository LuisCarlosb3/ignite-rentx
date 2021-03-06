import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];
  private static INSTANCE: SpecificationRepository;
  constructor() {
    this.specifications = [];
  }
  static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }
  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, { name, description });
    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specifications: Specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specifications;
  }
}

export { SpecificationRepository };
