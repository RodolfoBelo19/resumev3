import { About } from "../entities";
import { AboutRepository } from "../repositories/AboutRepository";

export class AboutService {
  private aboutRepository: AboutRepository;

  constructor() {
    this.aboutRepository = new AboutRepository();
  }

  async saveOrUpdateAbout(about: About): Promise<void> {
    await this.aboutRepository.save(about);
  }

  async getAbout(id: string) {
    return await this.aboutRepository.get(id);
  }
}