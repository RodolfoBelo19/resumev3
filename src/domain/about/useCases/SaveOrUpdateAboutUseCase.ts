import { About } from "../entities";
import { AboutService } from "../services/AboutService";

export class SaveOrUpdateAboutUseCase {
  private aboutService: AboutService;

  constructor() {
    this.aboutService = new AboutService();
  }

  async execute(about: About): Promise<void> {
    await this.aboutService.saveOrUpdateAbout(about);
  }
}