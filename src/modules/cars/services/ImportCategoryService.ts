import { parse } from "csv-parse";
import fs from "fs";

import { ICategoriesRepository } from "../repository/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryService {
  constructor(private readonly categoriesRepository: ICategoriesRepository) {}

  private async loadCategories(
    file: Express.Multer.File
  ): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];
      const stream = fs.createReadStream(file.path);
      const parseFile = parse();
      stream.pipe(parseFile);
      parseFile
        .on("data", (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on("end", () => {
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories: IImportCategory[] = await this.loadCategories(file);
    categories.forEach((category) => {
      const { name, description } = category;
      const existingCategory = this.categoriesRepository.findByName(name);
      if (!existingCategory) {
        this.categoriesRepository.create({ name, description });
      }
    });
  }
}
export { ImportCategoryService };
